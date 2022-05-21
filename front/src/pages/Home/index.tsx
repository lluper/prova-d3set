import "./index.css";
import { Layout, Row, Col, Button, List, Avatar, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { getAllPeople } from "../../api/People";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import HomeContext from "../../contexts/Home/HomeContext";
import { getName } from "../../utils/utils";

const { Content } = Layout;
const { Title } = Typography;

function App() {
  const navigate = useNavigate();

  const [listPeople, setListPeople] = useState<Array<any>>([]);
  const { isOnlyMoreTwo, setIsOnlyMoreTwo } = useContext(HomeContext);

  function onToggleCheckbox() {
    setIsOnlyMoreTwo(!isOnlyMoreTwo);
  }

  useEffect(() => {
    async function getAll() {
      let response = await getAllPeople({ onlyMoreTwo: isOnlyMoreTwo });
      setListPeople(response.data);
    }

    getAll();
  }, [isOnlyMoreTwo]);

  function goToPeopleInside(id: number) {
    navigate(`people/${id}`);
  }

  return (
    <Container>
      <Content>
        <Row align="middle">
          <Col span={20} sm={16}>
            <Title style={{ color: "#1890ff" }} level={2}>
              Pessoas
            </Title>
          </Col>
        </Row>

        <Row style={{ marginBottom: "30px" }} align="middle">
          <Col offset={0} style={{ marginTop: "10px" }}>
            <Button type="primary" onClick={onToggleCheckbox}>
              {!isOnlyMoreTwo ? "Mais de 2 telefones" : "Mostrar todos"}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <List
              itemLayout="horizontal"
              dataSource={listPeople}
              bordered
              renderItem={(item) => (
                <div
                  onClick={() => goToPeopleInside(item.id)}
                  className="cursor-pointer"
                >
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar>{getName(item.name)}</Avatar>}
                      title={item.name}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                </div>
              )}
            />
          </Col>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
