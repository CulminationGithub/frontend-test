import { PropsWithChildren } from "react";
import "./input.css";

export default function Input({ label }: PropsWithChildren<{label: string}>) {
    return (
    <div className="text-input">
        <input type="text" id="input1" placeholder="Try typing something in here!"/>
        <label htmlFor="input1">{label}</label>
      </div>
    )
  }