import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {SidebarItem} from "./SidebarItem";
import SidebarContext from "./SidebarContext";

export interface SidebarProps {
    className?: string;
    children?: React.ReactNode;
    closed?: boolean;
}

const closeAnim = keyframes`
    from {
        transform: translateX(-12px);
    }

    to {
        transform: translateX(0);
    }
`;

const SidebarElement = styled.div<{ closed?: boolean }>`
    display: flex;
    flex-direction: column;
    font-family: "Outfit", sans-serif;
    color: black;
    width: fit-content;
    gap: 0.8em;
    margin: 10px;
    padding: 1em;
    border-radius: 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-user-select: none;
    user-select: none;
    min-width: ${(props) => (props.closed ? "auto" : "none")};

    .Base__SidebarItem {
        ${({closed}) =>
                closed &&
                `
      width: fit-content;
    `}

        animation: ${({closed}) =>
                closed ? closeAnim : "none"} 0.1s cubic-bezier(.77, 0, .18, 1) forwards;

        &--Text {
            ${({closed}) =>
                    closed &&
                    `
        display: none;
      `}
        }
    }
`;

const SidebarContentElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const MenuBtnElement = styled(SidebarItem)`
    width: fit-content;
`;

export function Sidebar({
                            children,
                            className,
                            closed = false,
                            ...props
                        }: SidebarProps) {
    const [close, setClose] = useState(closed);

    const handleToggle = () => setClose(!close);

    return (
        <SidebarContext.Provider
            value={{
                close,
                handleToggle,
            }}
        >
            <SidebarElement
                closed={close || closed}
                className={[
                    "Base__Sidebar",
                    "Sidebar",
                    close ? "Base__Sidebar--Closed" : "",
                    className,
                ].join(" ")}
                {...props}
            >
                <MenuBtnElement
                    className="Base__Sidebar--MenuBtn"
                    icon={"menu"}
                    disableText
                    onClick={() => handleToggle()}
                />

                <SidebarContentElement className={"Base__Sidebar--Content"}>
                    {children || <SidebarItem text={"Sidebar Empty"} icon={"warning"}/>}
                </SidebarContentElement>
            </SidebarElement>
        </SidebarContext.Provider>
    );
}
