"use client";
import { useState, useEffect } from "react";
import reactDom from "react-dom";

type Props = {
  children: React.ReactNode;
};

const Portal = ({ children }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  if (!element) return null;

  return reactDom.createPortal(children, element);
};

export default Portal;
