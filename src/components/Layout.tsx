interface LayoutProps {
  header: React.ReactNode;
  leftSidebar: React.ReactNode;
  content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-200 p-4">{props.header}</header>
      <div className="flex flex-1 flex-row">
        <main className="flex-1 bg-blue-50 p-4">{props.content}</main>
        <nav className="order-first w-64 bg-blue-100 p-4">
          {props.leftSidebar}
        </nav>
      </div>
    </div>
  );
};

export default Layout;
