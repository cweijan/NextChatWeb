import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "./button";
import AddIcon from "../icons/edit-new.svg";
import Locale from "../locales";
import { Path } from "../constant";
import styles from "./new-chat-button.module.scss";

interface NewChatButtonProps {
  /** 是否显示文本标签 */
  showText?: boolean;
  /** 是否显示阴影效果 */
  shadow?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击事件回调 */
  onClick?: () => void;
}

export function NewChatButton({
  showText = true,
  shadow = true,
  className,
  disabled = false,
  onClick,
}: NewChatButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(Path.NewChat);
    }
  };

  return (
    <div className={`${styles["new-chat-button-container"]} ${className || ""}`}>
      <IconButton
        icon={<AddIcon />}
        text={showText ? Locale.Home.NewChat : undefined}
        onClick={handleClick}
        shadow={shadow}
        disabled={disabled}
        className={styles["new-chat-button"]}
        title={Locale.Home.NewChat}
        style={{
          color: "var(--new-chat-button-color)",
          background: "var(--new-chat-button-background)",
        }}
      />
    </div>
  );
}
