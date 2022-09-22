import { AiOutlineBulb, AiOutlineHome } from "react-icons/ai";
import Anchor from "../../atoms/Anchor/Anchor.js";
import SideNav from "./SideNav.js";
import SideNavGroup from "./SideNavGroup.js";

const metadata = {
  component: SideNav,
  subcomponents: { Anchor, SidenavGroup: SideNavGroup },
};

export default metadata;

const Template = (args) => (
  <SideNav {...args}>
    <SideNavGroup>
      <Anchor
        variant="nav-item"
        iconBefore={<AiOutlineHome />}
        label="Home"
        href="/"
      />
      <Anchor
        variant="nav-item"
        iconBefore={<AiOutlineBulb />}
        label="Menu Item"
        href="/"
      />
    </SideNavGroup>
    <SideNavGroup title="Menu Group">
      <Anchor variant="nav-item" label="Menu Item" href="/" />
      <Anchor variant="nav-item" label="Menu Item" href="/" />
    </SideNavGroup>
  </SideNav>
);

export const Basic = Template.bind({});
Basic.args = {};
