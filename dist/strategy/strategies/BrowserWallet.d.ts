import type { SignatureOptions } from "arweave/node/lib/crypto/crypto-interface";
import type Transaction from "arweave/node/lib/transaction";
import type Strategy from "../Strategy";
import type { PermissionType, AppInfo, GatewayConfig, DispatchResult, DataItem } from "arconnect";
/**
 * Any kind of browser wallet, with an
 * ArConnect-like injected API
 */
export default class BrowserWalletStrategy implements Strategy {
    id: "browserwallet";
    name: string;
    description: string;
    theme: string;
    logo: string;
    constructor();
    isAvailable(): Promise<boolean>;
    sync(): Promise<void>;
    connect(permissions: PermissionType[], appInfo?: AppInfo, gateway?: GatewayConfig): Promise<void>;
    disconnect(): Promise<void>;
    getActiveAddress(): Promise<string>;
    getAllAddresses(): Promise<string[]>;
    getPermissions(): Promise<PermissionType[]>;
    getWalletNames(): Promise<{
        [addr: string]: string;
    }>;
    sign(transaction: Transaction, options?: SignatureOptions): Promise<Transaction>;
    signDataItem(p: DataItem): Promise<ArrayBuffer>;
    encrypt(data: BufferSource, algorithm: RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<Uint8Array>;
    decrypt(data: BufferSource, algorithm: RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<Uint8Array>;
    getArweaveConfig(): Promise<GatewayConfig>;
    signature(data: Uint8Array, algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams): Promise<Uint8Array>;
    getActivePublicKey(): Promise<string>;
    addToken(id: string): Promise<void>;
    dispatch(transaction: Transaction): Promise<DispatchResult>;
    addAddressEvent(listener: (address: string) => void): (e: CustomEvent<{
        address: string;
    }>) => void;
    removeAddressEvent(listener: (e: CustomEvent<{
        address: string;
    }>) => void): void;
}
