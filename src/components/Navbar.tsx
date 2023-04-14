type NavbarProps = {
    id: string;
    title: string;
  };
  
  export default function Navbar({ id, title }: NavbarProps) {
    return (
      <nav className="w-full bg-white dark:bg-gray-800 shadow py-3 px-6 font-black text-3xl" id={id}>
        {id} {title}
      </nav>
    );
  }
  