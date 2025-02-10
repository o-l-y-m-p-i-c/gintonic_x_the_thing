import { useActionState, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { toast } from "react-toastify";
import { FollowListItem } from "./components/FollowListItem";
import {
  GintonicIcon,
  PrivateAIIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../assets/socials";

export const SubForm = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const [emailValue, setEmailValue] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const [, formAction] = useActionState(
    async (
      _prevState: {
        email: string;
      },
      formData: FormData
    ) => {
      const email = formData.get("email")?.toString() || "";

      setEmailValue(email);

      const isValid = isValidEmail(email);

      if (!isValid) {
        toast.error("Invalid email");
      } else {
        toast.success("Success!");
      }

      return { email };
    },
    {
      email: emailValue,
    }
  );

  const onChange = (value: string) => {
    setEmailValue(value);
  };

  const iconStyles: React.CSSProperties = {
    width: 40,
    height: 24,
    objectFit: "contain",
  };

  return (
    <>
      <form
        action={formAction}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <TextField
          ref={emailInput}
          variant={"primary"}
          onChange={onChange}
          name={"email"}
          type={"email"}
          value={emailValue}
          placeholder="your@email.com"
        />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          <FollowListItem
            variant={"primary"}
            label="Follow PRIVATEAI.COM on X"
            icon={<img style={iconStyles} src={TwitterIcon} />}
          />
          <FollowListItem
            variant={"primary"}
            label="Subscribe to PRIVATEAI.COM Telegram"
            icon={<img style={iconStyles} src={TelegramIcon} />}
          />
          <FollowListItem
            variant={"primary"}
            label="Visit THE THING "
            icon={<img style={iconStyles} src={PrivateAIIcon} />}
          />
          <FollowListItem
            variant={"primary"}
            label="Subscribe to Gintonic AI Telegram"
            icon={<img style={iconStyles} src={TelegramIcon} />}
          />
          <FollowListItem
            variant={"primary"}
            label="Follow Gintonic AI on X"
            icon={<img style={iconStyles} src={TwitterIcon} />}
          />
          <FollowListItem
            variant={"primary"}
            label="Visit Gintonic AI"
            icon={<img style={iconStyles} src={GintonicIcon} />}
          />
        </ul>
        <Button type={"submit"}>Connect Wallet</Button>
      </form>
    </>
  );
};
