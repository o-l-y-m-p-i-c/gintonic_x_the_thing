import { ReactNode } from "react";
import { Button } from "../../../../components/Button";
import style from "./style.module.scss";

function FollowListItem({
  variant,
  label = "",
  icon,
}: {
  variant: "primary" | "secondary" | "text";
  label: string;
  icon: ReactNode;
}) {
  return (
    <li style={{ flex: 1 }}>
      <div className={style.list_item_outer}>
        {icon}
        <div className={style.list_item}>
          {label}
          <span
            style={{
              marginLeft: "auto",
            }}
          >
            <Button type={"button"} variant={variant} size={"small"}>
              Start
            </Button>
          </span>
        </div>
      </div>
    </li>
  );
}

export { FollowListItem };
