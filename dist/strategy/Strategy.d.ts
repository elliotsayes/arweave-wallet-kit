import type { SignatureOptions } from "arweave/node/lib/crypto/crypto-interface";
import type Transaction from "arweave/node/lib/transaction";
import type { PermissionType, AppInfo, GatewayConfig, DispatchResult, DataItem } from "arconnect";
export default abstract class Strategy {
    abstract id: string;
    abstract name: string;
    abstract description: string;
    abstract theme?: string;
    abstract logo: string;
    abstract url?: string;
    abstract resumeSession?(): Promise<void>;
    abstract connect(permissions: PermissionType[], appInfo?: AppInfo, gateway?: GatewayConfig): Promise<void>;
    abstract disconnect(): Promise<void>;
    abstract getActiveAddress(): Promise<string>;
    abstract getAllAddresses?(): Promise<string[]>;
    abstract sign(transaction: Transaction, options?: SignatureOptions): Promise<Transaction>;
    abstract getPermissions(): Promise<PermissionType[]>;
    abstract getWalletNames?(): Promise<{
        [addr: string]: string;
    }>;
    abstract encrypt?(data: BufferSource, algorithm: RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<Uint8Array>;
    abstract decrypt?(data: BufferSource, algorithm: RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<Uint8Array>;
    abstract getArweaveConfig?(): Promise<GatewayConfig>;
    abstract signature?(data: Uint8Array, algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams): Promise<Uint8Array>;
    abstract getActivePublicKey?(): Promise<string>;
    abstract addToken?(id: string): Promise<void>;
    abstract dispatch(transaction: Transaction): Promise<DispatchResult>;
    /** Is this strategy available in the current context */
    abstract isAvailable(): Promise<boolean | string> | boolean | string;
    /** Events */
    abstract addAddressEvent?(listener: (address: string) => void): (e: CustomEvent<{
        address: string;
    }>) => void;
    abstract removeAddressEvent?(listener: (e: CustomEvent<{
        address: string;
    }>) => void): void;
    abstract signDataItem(p: DataItem): Promise<ArrayBuffer>;
}
