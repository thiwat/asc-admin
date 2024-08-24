import { FormProps as DefaultFormProps } from "antd";
import React from "react";

export type FormProps = DefaultFormProps & {
  children: React.ReactNode,
}