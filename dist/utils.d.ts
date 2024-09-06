import type { Tag } from "arweave/web/lib/transaction";
import type { RGBObject } from "./components/Provider";
import type { PermissionType } from "arconnect";
/**
 * Compare two permission arrays
 *
 * @param required The permissions that should be in the second array
 * @param existing The permissions the app has
 */
export declare function comparePermissions(required: PermissionType[], existing: PermissionType[]): boolean;
/**
 * Beautify addresses
 *
 * @param address Address to beautify
 */
export declare function formatAddress(address: string, count?: number): string;
export declare const rgbToString: (rgb: RGBObject) => string;
/**
 * Call the window.arweaveWallet API and wait for it to be injected,
 * if it has not yet been injected.
 *
 * @param fn Function name
 * @param params Params
 * @returns API result
 */
export declare function callWindowApi(fn: string, params?: any[]): Promise<any>;
/**
 * Decode an array of tags
 *
 * @param tags An array of tags
 * @returns An array of decoded tags
 */
export declare function decodeTags(tags: Tag[]): (Tag | {
    name: string;
    value: string;
})[];
