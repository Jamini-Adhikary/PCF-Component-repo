import { IInputs, IOutputs } from "./generated/ManifestTypes";
import MainComponent from "./MainComponent";
import * as React from "react";

export class PCFUsingReact implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;

    constructor() { 
        //Constructor
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        return React.createElement(MainComponent);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        //destroy
     }
}