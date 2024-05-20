/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TextField from "../TextField";

describe("TextField", () => {
  // normal rendering
  it("에러 없이 렌더링 되어야 합니다.", () => {
    render(<TextField />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.tagName).toBe("INPUT");
  });

  it("label을 props로 받아 렌더링해야합니다.", () => {
    render(<TextField label="LABEL" />);

    const label = screen.getByText("LABEL");

    expect(label).toBeInTheDocument();
  });

  it("placeholder를 props로 받아 렌더링해야합니다.", () => {
    render(<TextField placeholder="PLACEHOLDER" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.placeholder).toBe("PLACEHOLDER");
  });

  it("value를 prosp로 받아 렌더링해야합니다.", () => {
    const onChange = vi.fn();
    render(<TextField value="VALUE" onChange={onChange} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).toHaveValue("VALUE");
  });

  it("defaultValue를 prosp로 받아 렌더링해야합니다.", () => {
    render(<TextField defaultValue="defaultValue" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).toHaveValue("defaultValue");
  });

  it("helper text를 prosp로 받아 렌더링해야합니다.", () => {
    const { container } = render(<TextField helperText="HELPER_TEXT" />);

    expect(container).toHaveTextContent("HELPER_TEXT");
  });

  it("leading Icon를 prosp로 받아 렌더링해야합니다.", () => {
    const { container } = render(<TextField leadingIcon={<div>Icon</div>} />);

    expect(container).toHaveTextContent("Icon");
  });

  it("trailing Icon를 prosp로 받아 렌더링해야합니다.", () => {
    const { container } = render(<TextField trailingIcon={<div>Icon</div>} />);

    expect(container).toHaveTextContent("Icon");
  });

  // focus
  it("tab으로 input 태그에 focus가 되어야합니다.", async () => {
    render(<TextField />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).not.toHaveFocus();
    await userEvent.tab();

    expect(input).toHaveFocus();
  });

  it("label을 click하면 input 태그에 focus가 되어야합니다.", async () => {
    const { container } = render(<TextField />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const label = container.querySelector("label") as HTMLLabelElement;

    expect(input).not.toHaveFocus();
    await userEvent.click(label);

    expect(input).toHaveFocus();
  });

  // typing
  it("user가 typing 시 value가 update 되어야합니다.", async () => {
    render(<TextField />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(input).toHaveValue("TYPE");
  });

  it("onChange 함수를 props로 받아 typeing 시 실행해야합니다.", async () => {
    const onChange = vi.fn();
    render(<TextField onChange={onChange} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(onChange).toHaveBeenCalled();
  });

  // disalbed
  it("disabled 시 tab으로 focus를 받지 않아야합니다.", async () => {
    render(<TextField disabled />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).not.toHaveFocus();
    await userEvent.tab();

    expect(input).not.toHaveFocus();
  });

  it("disabled 시 label을 click해도 focus를 받지 않아야합니다.", async () => {
    const { container } = render(<TextField disabled />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const label = container.querySelector("label") as HTMLLabelElement;

    expect(input).not.toHaveFocus();
    await userEvent.click(label);

    expect(input).not.toHaveFocus();
  });

  it("disabled 시 user가 typing 시 value가 update 되지 않아야합니다", async () => {
    render(<TextField disabled value="VALUE" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(input).toHaveValue("VALUE");
  });

  // readOnly
  it("readOnly 시 tab으로 focus 되어야합니다.", async () => {
    render(<TextField readOnly />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).not.toHaveFocus();
    await userEvent.tab();

    expect(input).toHaveFocus();
  });

  it("readOnly 시 label을 click하면 focus 되어야합니다.", async () => {
    const { container } = render(<TextField readOnly />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const label = container.querySelector("label") as HTMLLabelElement;

    expect(input).not.toHaveFocus();
    await userEvent.click(label);

    expect(input).toHaveFocus();
  });

  it("readOnly 시 user가 typing 시 value가 update 되지 않아야합니다", async () => {
    render(<TextField readOnly value="VALUE" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(input).toHaveValue("VALUE");
  });
});
