import UserHeader from "@/app/user/Header/UserHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
    </>
  );
}