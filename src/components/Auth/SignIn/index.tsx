"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  // Klasik email/password login
  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/user"); // Kullanıcı paneline yönlendir!
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  // Sosyal loginlerle /user'a yönlendirme
  const socialLogin = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: "/user" });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      {/* Sosyal login butonları */}
      <button
        type="button"
        onClick={() => socialLogin("google")}
        className="w-full bg-red-500 text-white py-2 rounded-md mb-2"
      >
        Google ile Giriş Yap
      </button>
      <button
        type="button"
        onClick={() => socialLogin("github")}
        className="w-full bg-gray-800 text-white py-2 rounded-md mb-2"
      >
        Github ile Giriş Yap
      </button>

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span>

      {/* Klasik email/password login */}
      <form onSubmit={loginUser}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
      >
        Forgot Password?
      </Link>
      <p className="text-body-secondary text-white text-base">
        Not a member yet?{" "}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;