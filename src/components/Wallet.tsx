import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Button from "./Button";

export const shortenAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

function Wallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div>
        <span className="mr-4">Connected to {shortenAddress(address!)}</span>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
    );

  return <Button onClick={() => connect()}> Connect Wallet</Button>;
}

export default Wallet;
