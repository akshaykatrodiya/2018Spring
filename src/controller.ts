import { Alerts } from "./model";
import * as $ from "jquery";

const m = new Alerts();
// const sjob;

m.Messages = ['Great new feature'];
// sjob.Alerts = ['Great new feature'];
// m.Messages = 'Great new feature';

export function displayAlerts() {
    $("#alerts").append(m.Messages.join());
};