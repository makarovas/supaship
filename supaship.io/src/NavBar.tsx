import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./App";
import Dialog from "./Dialog";
import { EmailListSignup } from "./EmailListSignup";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { session } = useContext(UserContext);
  const [showProDialog, setShowProDialog] = useState(false);
  return (
    <>
      <nav className="flex justify-between align-center max-w-screen-2xl mx-auto px-3 md:px-8 p-6 md:p-8 text-gray1 w-full">
       

        <ul className="flex justify-center items-center">
          <li className="ml-2 mr-6 relative">
            {session?.user ? <UserMenu /> : <Login />}
          </li>
        </ul>
      </nav>
      <Dialog
        open={showProDialog}
        dialogStateChange={(open) => {
          setShowProDialog(open);
        }}
        contents={
          <>
            <div className="flex flex-col content-center gap-6">
              <h2 className="text-green-400 drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] m-4 text-center text-3xl">
                We're not quite ready yet
              </h2>
              <p className="text-center">
                Expect the course to drop sometime around Thanksgiving 2022. In
                the meantime - you can checkout the{" "}
                <a
                  href="https://fireship.io/courses"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] transition duration-500"
                >
                  sweet, sweet courses
                </a>{" "}
                currently available at Fireship Pro:
              </p>
              <a
                href="https://fireship.io/courses"
                target="_blank"
                rel="noreferrer"
                className="grid place-content-center"
              >
                <img
                  src="https://fireship.io/img/logo.svg"
                  className="h-24 hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] transition duration-500"
                />
              </a>
              <p className="text-center">
                Be sure to checkout our YouTube channels as well for more coding
                vids:
              </p>
            </div>
            <EmailListSignup />
            <button className="mt-8" onClick={() => setShowProDialog(false)}>
              Close
            </button>
          </>
        }
      />
    </>
  );
}
