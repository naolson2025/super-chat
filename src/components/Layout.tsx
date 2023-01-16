interface LayoutProps {
  header: React.ReactNode;
  leftSidebar: React.ReactNode;
  content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="flex mx-auto max-w-3xl flex-col py-10">
      <header className="bg-blue-200 p-4 rounded-t-lg">{props.header}</header>
      <div className="flex flex-1 flex-row">
        <main className="flex-1 bg-blue-50 p-4 rounded-br-lg">{props.content}</main>
        <nav className="order-first w-72 bg-blue-100 p-4 rounded-bl-lg">
          {props.leftSidebar}
        </nav>
      </div>
    </div>
  );
};

export default Layout;
