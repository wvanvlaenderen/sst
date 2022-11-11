import {test} from "vitest";
import {Session} from '@serverless-stack/node/auth';
import {ViteStaticSite} from '@serverless-stack/node/site';

declare module "@serverless-stack/node/auth" {
    export interface SessionTypes {
        user: {
            userID: string;
        };
    }
}

test("should return activities", async () => {
    try {
        Session.parameter({
            redirect: process.env.IS_LOCAL ? "http://127.0.0.1:5173" : ViteStaticSite.site.url,
            type: "user",
            properties: {
                userID: 'testing1234',
            },
        });
    } catch (e) {
        throw e;
    }
});
