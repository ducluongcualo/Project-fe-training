import { action, makeObservable, observable } from "mobx";
import { LANGUAGE } from "constants/language";
import { Service } from "typedi";

const CONFIG_KEY = "configs";
enum Theme {
    Dark = "dark",
    Light = "light",
}

export interface IConfig {
    language: LANGUAGE;
    theme: Theme;
}

@Service()
export class Config {
    theme: "light" | "dark" = "light";

    public constructor() {
        const configsLocalStore = localStorage.getItem(CONFIG_KEY);
        if (configsLocalStore) {
            const configs: IConfig = JSON.parse(Object(configsLocalStore));
            Object.assign(this, configs);
        }
        makeObservable(this, {
            theme: observable,
            toggleTheme: action.bound,
        });
    }

    public toggleTheme() {
        this.theme = this.theme === Theme.Dark ? Theme.Light : Theme.Dark;
    }
}
