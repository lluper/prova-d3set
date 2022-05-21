import {
  Row,
  Col,
  Typography,
  Input,
  DatePicker,
  Layout,
  List,
  Divider,
  Grid,
  notification,
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPeopleById } from "../../../../api/People";
import { Container } from "../../../../components/Container";
import { People } from "../../../../models/People";
import moment from "moment";
import axios from "axios";
const { Title } = Typography;
const { Header, Content } = Layout;

export function PeopleScreen() {
  let { id } = useParams();
  let [people, setPeople] = useState<People | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAll() {
      if (id) {
        try {
          let response = await getPeopleById(id);
          setPeople(response.data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
              notification.error({
                message: "Registro não encontrado",
              });
              navigate("/");
            }
          }
        }
      }
    }

    getAll();
  }, [id]);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <Container>
      <Header className="header">
        <Title onClick={() => navigate(-1)} style={{ color: "#fff" }} level={5}>
          Voltar
        </Title>
      </Header>

      <Content>
        <Row>
          <Col span={20}>
            <Title style={{ color: "#1890ff" }} level={4}>
              {people?.name}
            </Title>
          </Col>
        </Row>

        <Row style={{ marginBottom: "20px" }}>
          <Col
            span={15}
            md={15}
            sm={24}
            xs={24}
            style={{ marginBottom: "10px" }}
          >
            <label htmlFor="inputName">Nome</label>
            <Input id="inputName" placeholder="nome" value={people?.name} disabled  />
          </Col>

          <Col
            span={5}
            md={5}
            sm={24}
            xs={24}
            offset={screens.xs || (screens.sm && !screens.md) ? 0 : 1}
          >
            <label htmlFor="dateBirthday">Data de nascimento</label>

            <DatePicker
              id="dateBirthday"
              style={{ width: "100%" }}
              defaultValue={moment(people?.dateBirthday.toString())}
              format="DD/MM/YYYY"
              disabled 
            />
          </Col>
        </Row>

        <Divider orientation="left">Telefones cadastrados</Divider>

        {people?.phones && (
          <Row>
            <Col span={24}>
              <List
                itemLayout="horizontal"
                dataSource={people.phones}
                bordered
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta title={item.phone} />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        )}
      </Content>
    </Container>
  );
}
