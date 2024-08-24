import React from "react";

export type PageHeaderBadgeProps = {
  label?: string;
  color?: string;
}

export type PageHeaderProps = {
  title: string;
  badge?: PageHeaderBadgeProps;
  extra?: React.ReactNode[];
}