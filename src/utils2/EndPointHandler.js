const HOME = "gaengagement/";
const AUTH = "auth/";

const path = (root, sublink) => {
    return `${root}${sublink}`;
};

export const APIENDPOINTS = {
    GANEGAMENT: {
        ROOT: "/",
        RATE: path(HOME, "engagementapi/"),
        EVENTCOUNT: path(HOME, "eventCountbyEventName/"),
    },
    AUTH: {
        ROOT: AUTH,
    }
}
