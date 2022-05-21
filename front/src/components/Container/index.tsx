import { Layout } from "antd";

export function Container({ children }:{children:Array<JSX.Element > |JSX.Element}) {
  return <Layout className="layout  layoutContainer">{children}</Layout>;
}
