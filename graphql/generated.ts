import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { fetchData } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Address: any;
  AssetId: any;
  BlockId: any;
  Bytes32: any;
  ContractId: any;
  HexString: any;
  MessageId: any;
  Salt: any;
  Signature: any;
  Tai64Timestamp: any;
  TransactionId: any;
  TxPointer: any;
  U64: any;
  UtxoId: any;
};

export type Balance = {
  __typename?: 'Balance';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  owner: Scalars['Address'];
};

export type BalanceConnection = {
  __typename?: 'BalanceConnection';
  /** A list of edges. */
  edges: Array<BalanceEdge>;
  /** A list of nodes. */
  nodes: Array<Balance>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BalanceEdge = {
  __typename?: 'BalanceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Balance;
};

export type BalanceFilterInput = {
  /** Filter coins based on the `owner` field */
  owner: Scalars['Address'];
};

export type Block = {
  __typename?: 'Block';
  consensus: Consensus;
  header: Header;
  id: Scalars['BlockId'];
  transactions: Array<Transaction>;
};

export type BlockConnection = {
  __typename?: 'BlockConnection';
  /** A list of edges. */
  edges: Array<BlockEdge>;
  /** A list of nodes. */
  nodes: Array<Block>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlockEdge = {
  __typename?: 'BlockEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Block;
};

export type Breakpoint = {
  contract: Scalars['ContractId'];
  pc: Scalars['U64'];
};

export type ChainInfo = {
  __typename?: 'ChainInfo';
  baseChainHeight: Scalars['U64'];
  consensusParameters: ConsensusParameters;
  latestBlock: Block;
  name: Scalars['String'];
  peerCount: Scalars['Int'];
};

export type ChangeOutput = {
  __typename?: 'ChangeOutput';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  to: Scalars['Address'];
};

export type Coin = {
  __typename?: 'Coin';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  blockCreated: Scalars['U64'];
  maturity: Scalars['U64'];
  owner: Scalars['Address'];
  status: CoinStatus;
  utxoId: Scalars['UtxoId'];
};

export type CoinConnection = {
  __typename?: 'CoinConnection';
  /** A list of edges. */
  edges: Array<CoinEdge>;
  /** A list of nodes. */
  nodes: Array<Coin>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoinEdge = {
  __typename?: 'CoinEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Coin;
};

export type CoinFilterInput = {
  /** Asset ID of the coins */
  assetId?: InputMaybe<Scalars['AssetId']>;
  /** Address of the owner */
  owner: Scalars['Address'];
};

export type CoinOutput = {
  __typename?: 'CoinOutput';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  to: Scalars['Address'];
};

export enum CoinStatus {
  Spent = 'SPENT',
  Unspent = 'UNSPENT'
}

export type Consensus = Genesis | PoAConsensus;

export type ConsensusParameters = {
  __typename?: 'ConsensusParameters';
  contractMaxSize: Scalars['U64'];
  gasPerByte: Scalars['U64'];
  gasPriceFactor: Scalars['U64'];
  maxGasPerTx: Scalars['U64'];
  maxInputs: Scalars['U64'];
  maxMessageDataLength: Scalars['U64'];
  maxOutputs: Scalars['U64'];
  maxPredicateDataLength: Scalars['U64'];
  maxPredicateLength: Scalars['U64'];
  maxScriptDataLength: Scalars['U64'];
  maxScriptLength: Scalars['U64'];
  maxStorageSlots: Scalars['U64'];
  maxWitnesses: Scalars['U64'];
};

export type Contract = {
  __typename?: 'Contract';
  bytecode: Scalars['HexString'];
  id: Scalars['ContractId'];
  salt: Scalars['Salt'];
};

export type ContractBalance = {
  __typename?: 'ContractBalance';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  contract: Scalars['ContractId'];
};

export type ContractBalanceConnection = {
  __typename?: 'ContractBalanceConnection';
  /** A list of edges. */
  edges: Array<ContractBalanceEdge>;
  /** A list of nodes. */
  nodes: Array<ContractBalance>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContractBalanceEdge = {
  __typename?: 'ContractBalanceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: ContractBalance;
};

export type ContractBalanceFilterInput = {
  /** Filter assets based on the `contractId` field */
  contract: Scalars['ContractId'];
};

export type ContractCreated = {
  __typename?: 'ContractCreated';
  contract: Contract;
  stateRoot: Scalars['Bytes32'];
};

export type ContractOutput = {
  __typename?: 'ContractOutput';
  balanceRoot: Scalars['Bytes32'];
  inputIndex: Scalars['Int'];
  stateRoot: Scalars['Bytes32'];
};

export type ExcludeInput = {
  /** Messages to exclude from the selection. */
  messages: Array<Scalars['MessageId']>;
  /** Utxos to exclude from the selection. */
  utxos: Array<Scalars['UtxoId']>;
};

export type FailureStatus = {
  __typename?: 'FailureStatus';
  block: Block;
  programState?: Maybe<ProgramState>;
  reason: Scalars['String'];
  time: Scalars['Tai64Timestamp'];
};

export type Genesis = {
  __typename?: 'Genesis';
  /**
   * The chain configs define what consensus type to use, what settlement layer to use,
   * rules of block validity, etc.
   */
  chainConfigHash: Scalars['Bytes32'];
  /** The Binary Merkle Tree root of all genesis coins. */
  coinsRoot: Scalars['Bytes32'];
  /** The Binary Merkle Tree root of state, balances, contracts code hash of each contract. */
  contractsRoot: Scalars['Bytes32'];
  /** The Binary Merkle Tree root of all genesis messages. */
  messagesRoot: Scalars['Bytes32'];
};

export type Header = {
  __typename?: 'Header';
  /** Hash of the application header. */
  applicationHash: Scalars['Bytes32'];
  /** The layer 1 height of messages and events to include since the last layer 1 block number. */
  daHeight: Scalars['U64'];
  /** Fuel block height. */
  height: Scalars['U64'];
  /** Hash of the header */
  id: Scalars['BlockId'];
  /** Number of output messages in this block. */
  outputMessagesCount: Scalars['U64'];
  /** Merkle root of messages in this block. */
  outputMessagesRoot: Scalars['Bytes32'];
  /** Merkle root of all previous block header hashes. */
  prevRoot: Scalars['Bytes32'];
  /** The block producer time. */
  time: Scalars['Tai64Timestamp'];
  /** Number of transactions in this block. */
  transactionsCount: Scalars['U64'];
  /** Merkle root of transactions. */
  transactionsRoot: Scalars['Bytes32'];
};

export type Input = InputCoin | InputContract | InputMessage;

export type InputCoin = {
  __typename?: 'InputCoin';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  maturity: Scalars['U64'];
  owner: Scalars['Address'];
  predicate: Scalars['HexString'];
  predicateData: Scalars['HexString'];
  txPointer: Scalars['TxPointer'];
  utxoId: Scalars['UtxoId'];
  witnessIndex: Scalars['Int'];
};

export type InputContract = {
  __typename?: 'InputContract';
  balanceRoot: Scalars['Bytes32'];
  contract: Contract;
  stateRoot: Scalars['Bytes32'];
  txPointer: Scalars['TxPointer'];
  utxoId: Scalars['UtxoId'];
};

export type InputMessage = {
  __typename?: 'InputMessage';
  amount: Scalars['U64'];
  data: Scalars['HexString'];
  messageId: Scalars['MessageId'];
  nonce: Scalars['U64'];
  predicate: Scalars['HexString'];
  predicateData: Scalars['HexString'];
  recipient: Scalars['Address'];
  sender: Scalars['Address'];
  witnessIndex: Scalars['Int'];
};

export type Message = {
  __typename?: 'Message';
  amount: Scalars['U64'];
  daHeight: Scalars['U64'];
  data: Scalars['HexString'];
  fuelBlockSpend?: Maybe<Scalars['U64']>;
  messageId: Scalars['MessageId'];
  nonce: Scalars['U64'];
  recipient: Scalars['Address'];
  sender: Scalars['Address'];
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  /** A list of edges. */
  edges: Array<MessageEdge>;
  /** A list of nodes. */
  nodes: Array<Message>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MessageEdge = {
  __typename?: 'MessageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Message;
};

export type MessageOutput = {
  __typename?: 'MessageOutput';
  amount: Scalars['U64'];
  recipient: Scalars['Address'];
};

export type MessageProof = {
  __typename?: 'MessageProof';
  amount: Scalars['U64'];
  data: Scalars['HexString'];
  header: Header;
  nonce: Scalars['Bytes32'];
  proofIndex: Scalars['U64'];
  proofSet: Array<Scalars['Bytes32']>;
  recipient: Scalars['Address'];
  sender: Scalars['Address'];
  signature: Scalars['Signature'];
};

export type Mutation = {
  __typename?: 'Mutation';
  continueTx: RunResult;
  /** Execute a dry-run of the transaction using a fork of current state, no changes are committed. */
  dryRun: Array<Receipt>;
  endSession: Scalars['Boolean'];
  execute: Scalars['Boolean'];
  produceBlocks: Scalars['U64'];
  reset: Scalars['Boolean'];
  setBreakpoint: Scalars['Boolean'];
  setSingleStepping: Scalars['Boolean'];
  startSession: Scalars['ID'];
  startTx: RunResult;
  /** Submits transaction to the txpool */
  submit: Transaction;
};


export type MutationContinueTxArgs = {
  id: Scalars['ID'];
};


export type MutationDryRunArgs = {
  tx: Scalars['HexString'];
  utxoValidation?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEndSessionArgs = {
  id: Scalars['ID'];
};


export type MutationExecuteArgs = {
  id: Scalars['ID'];
  op: Scalars['String'];
};


export type MutationProduceBlocksArgs = {
  blocksToProduce: Scalars['U64'];
  time?: InputMaybe<TimeParameters>;
};


export type MutationResetArgs = {
  id: Scalars['ID'];
};


export type MutationSetBreakpointArgs = {
  breakpoint: Breakpoint;
  id: Scalars['ID'];
};


export type MutationSetSingleSteppingArgs = {
  enable: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationStartTxArgs = {
  id: Scalars['ID'];
  txJson: Scalars['String'];
};


export type MutationSubmitArgs = {
  tx: Scalars['HexString'];
};

export type NodeInfo = {
  __typename?: 'NodeInfo';
  maxDepth: Scalars['U64'];
  maxTx: Scalars['U64'];
  minGasPrice: Scalars['U64'];
  nodeVersion: Scalars['String'];
  utxoValidation: Scalars['Boolean'];
  vmBacktrace: Scalars['Boolean'];
};

export type Output = ChangeOutput | CoinOutput | ContractCreated | ContractOutput | MessageOutput | VariableOutput;

/**
 * A separate `Breakpoint` type to be used as an output, as a single
 * type cannot act as both input and output type in async-graphql
 */
export type OutputBreakpoint = {
  __typename?: 'OutputBreakpoint';
  contract: Scalars['ContractId'];
  pc: Scalars['U64'];
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PoAConsensus = {
  __typename?: 'PoAConsensus';
  /** Gets the signature of the block produced by `PoA` consensus. */
  signature: Scalars['Signature'];
};

export type ProgramState = {
  __typename?: 'ProgramState';
  data: Scalars['HexString'];
  returnType: ReturnType;
};

export type Query = {
  __typename?: 'Query';
  balance: Balance;
  balances: BalanceConnection;
  block?: Maybe<Block>;
  blocks: BlockConnection;
  chain: ChainInfo;
  coin?: Maybe<Coin>;
  coins: CoinConnection;
  contract?: Maybe<Contract>;
  contractBalance: ContractBalance;
  contractBalances: ContractBalanceConnection;
  /** Returns true when the GraphQL API is serving requests. */
  health: Scalars['Boolean'];
  memory: Scalars['String'];
  messageProof?: Maybe<MessageProof>;
  messages: MessageConnection;
  nodeInfo: NodeInfo;
  register: Scalars['U64'];
  /**
   * For each `query_per_asset`, get some spendable resources(of asset specified by the query) owned by
   * `owner` that add up at least the query amount. The returned resources are actual resources
   * that can be spent. The number of resources is optimized to prevent dust accumulation.
   * Max number of resources and excluded resources can also be specified.
   *
   * Returns:
   * The list of spendable resources per asset from the query. The length of the result is
   * the same as the length of `query_per_asset`. The ordering of assets and `query_per_asset`
   * is the same.
   */
  resourcesToSpend: Array<Array<Resource>>;
  transaction?: Maybe<Transaction>;
  transactions: TransactionConnection;
  transactionsByOwner: TransactionConnection;
};


export type QueryBalanceArgs = {
  assetId: Scalars['AssetId'];
  owner: Scalars['Address'];
};


export type QueryBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter: BalanceFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryBlockArgs = {
  height?: InputMaybe<Scalars['U64']>;
  id?: InputMaybe<Scalars['BlockId']>;
};


export type QueryBlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCoinArgs = {
  utxoId: Scalars['UtxoId'];
};


export type QueryCoinsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter: CoinFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryContractArgs = {
  id: Scalars['ContractId'];
};


export type QueryContractBalanceArgs = {
  asset: Scalars['AssetId'];
  contract: Scalars['ContractId'];
};


export type QueryContractBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter: ContractBalanceFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMemoryArgs = {
  id: Scalars['ID'];
  size: Scalars['U64'];
  start: Scalars['U64'];
};


export type QueryMessageProofArgs = {
  messageId: Scalars['MessageId'];
  transactionId: Scalars['TransactionId'];
};


export type QueryMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['Address']>;
};


export type QueryRegisterArgs = {
  id: Scalars['ID'];
  register: Scalars['U64'];
};


export type QueryResourcesToSpendArgs = {
  excludedIds?: InputMaybe<ExcludeInput>;
  owner: Scalars['Address'];
  queryPerAsset: Array<SpendQueryElementInput>;
};


export type QueryTransactionArgs = {
  id: Scalars['TransactionId'];
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryTransactionsByOwnerArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owner: Scalars['Address'];
};

export type Receipt = {
  __typename?: 'Receipt';
  amount?: Maybe<Scalars['U64']>;
  assetId?: Maybe<Scalars['AssetId']>;
  contract?: Maybe<Contract>;
  contractId?: Maybe<Scalars['ContractId']>;
  data?: Maybe<Scalars['HexString']>;
  digest?: Maybe<Scalars['Bytes32']>;
  gas?: Maybe<Scalars['U64']>;
  gasUsed?: Maybe<Scalars['U64']>;
  is?: Maybe<Scalars['U64']>;
  len?: Maybe<Scalars['U64']>;
  messageId?: Maybe<Scalars['MessageId']>;
  nonce?: Maybe<Scalars['Bytes32']>;
  param1?: Maybe<Scalars['U64']>;
  param2?: Maybe<Scalars['U64']>;
  pc?: Maybe<Scalars['U64']>;
  ptr?: Maybe<Scalars['U64']>;
  ra?: Maybe<Scalars['U64']>;
  rawPayload: Scalars['HexString'];
  rb?: Maybe<Scalars['U64']>;
  rc?: Maybe<Scalars['U64']>;
  rd?: Maybe<Scalars['U64']>;
  reason?: Maybe<Scalars['U64']>;
  receiptType: ReceiptType;
  recipient?: Maybe<Scalars['Address']>;
  result?: Maybe<Scalars['U64']>;
  sender?: Maybe<Scalars['Address']>;
  to?: Maybe<Contract>;
  toAddress?: Maybe<Scalars['Address']>;
  val?: Maybe<Scalars['U64']>;
};

export enum ReceiptType {
  Call = 'CALL',
  Log = 'LOG',
  LogData = 'LOG_DATA',
  MessageOut = 'MESSAGE_OUT',
  Panic = 'PANIC',
  Return = 'RETURN',
  ReturnData = 'RETURN_DATA',
  Revert = 'REVERT',
  ScriptResult = 'SCRIPT_RESULT',
  Transfer = 'TRANSFER',
  TransferOut = 'TRANSFER_OUT'
}

/** The schema analog of the [`crate::database::utils::Resource`]. */
export type Resource = Coin | Message;

export enum ReturnType {
  Return = 'RETURN',
  ReturnData = 'RETURN_DATA',
  Revert = 'REVERT'
}

export type RunResult = {
  __typename?: 'RunResult';
  breakpoint?: Maybe<OutputBreakpoint>;
  jsonReceipts: Array<Scalars['String']>;
  state: RunState;
};

export enum RunState {
  /** Stopped on a breakpoint */
  Breakpoint = 'BREAKPOINT',
  /** All breakpoints have been processed, and the program has terminated */
  Completed = 'COMPLETED'
}

export type SpendQueryElementInput = {
  /** Target amount for the query. */
  amount: Scalars['U64'];
  /** Identifier of the asset to spend. */
  assetId: Scalars['AssetId'];
  /** The maximum number of currencies for selection. */
  max?: InputMaybe<Scalars['U64']>;
};

export type SqueezedOutStatus = {
  __typename?: 'SqueezedOutStatus';
  reason: Scalars['String'];
};

export type SubmittedStatus = {
  __typename?: 'SubmittedStatus';
  time: Scalars['Tai64Timestamp'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Returns a stream of status updates for the given transaction id.
   * If the current status is [`TransactionStatus::Success`], [`TransactionStatus::SqueezedOut`]
   * or [`TransactionStatus::Failed`] the stream will return that and end immediately.
   * If the current status is [`TransactionStatus::Submitted`] this will be returned
   * and the stream will wait for a future update.
   *
   * This stream will wait forever so it's advised to use within a timeout.
   *
   * It is possible for the stream to miss an update if it is polled slower
   * then the updates arrive. In such a case the stream will close without
   * a status. If this occurs the stream can simply be restarted to return
   * the latest status.
   */
  statusChange: TransactionStatus;
};


export type SubscriptionStatusChangeArgs = {
  id: Scalars['TransactionId'];
};

export type SuccessStatus = {
  __typename?: 'SuccessStatus';
  block: Block;
  programState?: Maybe<ProgramState>;
  time: Scalars['Tai64Timestamp'];
};

export type TimeParameters = {
  /** The time interval between subsequent blocks */
  blockTimeInterval: Scalars['U64'];
  /** The time to set on the first block */
  startTime: Scalars['U64'];
};

export type Transaction = {
  __typename?: 'Transaction';
  bytecodeLength?: Maybe<Scalars['U64']>;
  bytecodeWitnessIndex?: Maybe<Scalars['Int']>;
  gasLimit?: Maybe<Scalars['U64']>;
  gasPrice?: Maybe<Scalars['U64']>;
  id: Scalars['TransactionId'];
  inputAssetIds?: Maybe<Array<Scalars['AssetId']>>;
  inputContracts?: Maybe<Array<Contract>>;
  inputs?: Maybe<Array<Input>>;
  isCreate: Scalars['Boolean'];
  isMint: Scalars['Boolean'];
  isScript: Scalars['Boolean'];
  maturity?: Maybe<Scalars['U64']>;
  outputs: Array<Output>;
  /** Return the transaction bytes using canonical encoding */
  rawPayload: Scalars['HexString'];
  receipts?: Maybe<Array<Receipt>>;
  receiptsRoot?: Maybe<Scalars['Bytes32']>;
  salt?: Maybe<Scalars['Salt']>;
  script?: Maybe<Scalars['HexString']>;
  scriptData?: Maybe<Scalars['HexString']>;
  status?: Maybe<TransactionStatus>;
  storageSlots?: Maybe<Array<Scalars['HexString']>>;
  txPointer?: Maybe<Scalars['TxPointer']>;
  witnesses?: Maybe<Array<Scalars['HexString']>>;
};

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges. */
  edges: Array<TransactionEdge>;
  /** A list of nodes. */
  nodes: Array<Transaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Transaction;
};

export type TransactionStatus = FailureStatus | SqueezedOutStatus | SubmittedStatus | SuccessStatus;

export type VariableOutput = {
  __typename?: 'VariableOutput';
  amount: Scalars['U64'];
  assetId: Scalars['AssetId'];
  to: Scalars['Address'];
};

export type BalanceQueryVariables = Exact<{
  owner: Scalars['Address'];
  assetId: Scalars['AssetId'];
}>;


export type BalanceQuery = { __typename?: 'Query', balance: { __typename?: 'Balance', owner: any, amount: any, assetId: any } };

export type BalancesQueryVariables = Exact<{
  filter: BalanceFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type BalancesQuery = { __typename?: 'Query', balances: { __typename?: 'BalanceConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'BalanceEdge', cursor: string, node: { __typename?: 'Balance', owner: any, amount: any, assetId: any } }>, nodes: Array<{ __typename?: 'Balance', owner: any, amount: any, assetId: any }> } };

export type BlockQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BlockId']>;
  height?: InputMaybe<Scalars['U64']>;
}>;


export type BlockQuery = { __typename?: 'Query', block?: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> } | null };

export type BlocksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type BlocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlockConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'BlockEdge', cursor: string, node: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any, applicationHash: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> } }>, nodes: Array<{ __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any, applicationHash: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }> } };

export type ChainQueryVariables = Exact<{ [key: string]: never; }>;


export type ChainQuery = { __typename?: 'Query', chain: { __typename?: 'ChainInfo', name: string, baseChainHeight: any, peerCount: number, latestBlock: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any, applicationHash: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, consensusParameters: { __typename?: 'ConsensusParameters', contractMaxSize: any, maxInputs: any, maxOutputs: any, maxWitnesses: any, maxGasPerTx: any, maxScriptLength: any, maxScriptDataLength: any, maxStorageSlots: any, maxPredicateLength: any, maxPredicateDataLength: any, gasPriceFactor: any, gasPerByte: any, maxMessageDataLength: any } } };

export type CoinQueryVariables = Exact<{
  utxoId: Scalars['UtxoId'];
}>;


export type CoinQuery = { __typename?: 'Query', coin?: { __typename?: 'Coin', utxoId: any, owner: any, amount: any, assetId: any, maturity: any, status: CoinStatus, blockCreated: any } | null };

export type CoinsQueryVariables = Exact<{
  filter: CoinFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type CoinsQuery = { __typename?: 'Query', coins: { __typename?: 'CoinConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'CoinEdge', cursor: string, node: { __typename?: 'Coin', utxoId: any, owner: any, amount: any, assetId: any, maturity: any, status: CoinStatus, blockCreated: any } }>, nodes: Array<{ __typename?: 'Coin', utxoId: any, owner: any, amount: any, assetId: any, maturity: any, status: CoinStatus, blockCreated: any }> } };

export type HeaderFieldsFragment = { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any };

export type ProgramStateFieldsFragment = { __typename?: 'ProgramState', returnType: ReturnType, data: any };

export type ContractFieldsFragment = { __typename?: 'Contract', id: any, bytecode: any, salt: any };

type ConsensusFields_Genesis_Fragment = { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any };

type ConsensusFields_PoAConsensus_Fragment = { __typename?: 'PoAConsensus', signature: any };

export type ConsensusFieldsFragment = ConsensusFields_Genesis_Fragment | ConsensusFields_PoAConsensus_Fragment;

export type TransactionFieldsFragment = { __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null };

export type BlockFieldsFragment = { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> };

type InputFields_InputCoin_Fragment = { __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any };

type InputFields_InputContract_Fragment = { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } };

type InputFields_InputMessage_Fragment = { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any };

export type InputFieldsFragment = InputFields_InputCoin_Fragment | InputFields_InputContract_Fragment | InputFields_InputMessage_Fragment;

type OutputFields_ChangeOutput_Fragment = { __typename?: 'ChangeOutput', to: any, amount: any, assetId: any };

type OutputFields_CoinOutput_Fragment = { __typename?: 'CoinOutput', to: any, amount: any, assetId: any };

type OutputFields_ContractCreated_Fragment = { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } };

type OutputFields_ContractOutput_Fragment = { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any };

type OutputFields_MessageOutput_Fragment = { __typename?: 'MessageOutput', recipient: any, amount: any };

type OutputFields_VariableOutput_Fragment = { __typename?: 'VariableOutput', to: any, amount: any, assetId: any };

export type OutputFieldsFragment = OutputFields_ChangeOutput_Fragment | OutputFields_CoinOutput_Fragment | OutputFields_ContractCreated_Fragment | OutputFields_ContractOutput_Fragment | OutputFields_MessageOutput_Fragment | OutputFields_VariableOutput_Fragment;

type TransactionStatusFields_FailureStatus_Fragment = { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null };

type TransactionStatusFields_SqueezedOutStatus_Fragment = { __typename?: 'SqueezedOutStatus', reason: string };

type TransactionStatusFields_SubmittedStatus_Fragment = { __typename?: 'SubmittedStatus', time: any };

type TransactionStatusFields_SuccessStatus_Fragment = { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null };

export type TransactionStatusFieldsFragment = TransactionStatusFields_FailureStatus_Fragment | TransactionStatusFields_SqueezedOutStatus_Fragment | TransactionStatusFields_SubmittedStatus_Fragment | TransactionStatusFields_SuccessStatus_Fragment;

export type ReceiptFieldsFragment = { __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null };

type ResourceFields_Coin_Fragment = { __typename?: 'Coin', utxoId: any, owner: any, amount: any, assetId: any, maturity: any, status: CoinStatus, blockCreated: any };

type ResourceFields_Message_Fragment = { __typename?: 'Message', messageId: any, amount: any, sender: any, recipient: any, nonce: any, data: any, daHeight: any, fuelBlockSpend?: any | null };

export type ResourceFieldsFragment = ResourceFields_Coin_Fragment | ResourceFields_Message_Fragment;

export type ContinueTxMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContinueTxMutation = { __typename?: 'Mutation', continueTx: { __typename?: 'RunResult', state: RunState, jsonReceipts: Array<string>, breakpoint?: { __typename?: 'OutputBreakpoint', contract: any, pc: any } | null } };

export type ContractQueryVariables = Exact<{
  id: Scalars['ContractId'];
}>;


export type ContractQuery = { __typename?: 'Query', contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null };

export type ContractBalanceQueryVariables = Exact<{
  contract: Scalars['ContractId'];
  asset: Scalars['AssetId'];
}>;


export type ContractBalanceQuery = { __typename?: 'Query', contractBalance: { __typename?: 'ContractBalance', contract: any, amount: any, assetId: any } };

export type ContractBalancesQueryVariables = Exact<{
  filter: ContractBalanceFilterInput;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type ContractBalancesQuery = { __typename?: 'Query', contractBalances: { __typename?: 'ContractBalanceConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'ContractBalanceEdge', cursor: string, node: { __typename?: 'ContractBalance', contract: any, amount: any, assetId: any } }>, nodes: Array<{ __typename?: 'ContractBalance', contract: any, amount: any, assetId: any }> } };

export type DryRunMutationVariables = Exact<{
  tx: Scalars['HexString'];
  utxoValidation?: InputMaybe<Scalars['Boolean']>;
}>;


export type DryRunMutation = { __typename?: 'Mutation', dryRun: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> };

export type EndSessionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EndSessionMutation = { __typename?: 'Mutation', endSession: boolean };

export type ExecuteMutationVariables = Exact<{
  id: Scalars['ID'];
  op: Scalars['String'];
}>;


export type ExecuteMutation = { __typename?: 'Mutation', execute: boolean };

export type HealthQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthQuery = { __typename?: 'Query', health: boolean };

export type MemoryQueryVariables = Exact<{
  id: Scalars['ID'];
  start: Scalars['U64'];
  size: Scalars['U64'];
}>;


export type MemoryQuery = { __typename?: 'Query', memory: string };

export type MessageProofQueryVariables = Exact<{
  transactionId: Scalars['TransactionId'];
  messageId: Scalars['MessageId'];
}>;


export type MessageProofQuery = { __typename?: 'Query', messageProof?: { __typename?: 'MessageProof', proofSet: Array<any>, proofIndex: any, sender: any, recipient: any, nonce: any, amount: any, data: any, signature: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any, applicationHash: any } } | null };

export type MessagesQueryVariables = Exact<{
  owner?: InputMaybe<Scalars['Address']>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: { __typename?: 'MessageConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'MessageEdge', cursor: string, node: { __typename?: 'Message', messageId: any, amount: any, sender: any, recipient: any, nonce: any, data: any, daHeight: any, fuelBlockSpend?: any | null } }>, nodes: Array<{ __typename?: 'Message', messageId: any, amount: any, sender: any, recipient: any, nonce: any, data: any, daHeight: any, fuelBlockSpend?: any | null }> } };

export type NodeInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type NodeInfoQuery = { __typename?: 'Query', nodeInfo: { __typename?: 'NodeInfo', utxoValidation: boolean, vmBacktrace: boolean, minGasPrice: any, maxTx: any, maxDepth: any, nodeVersion: string } };

export type ProduceBlocksMutationVariables = Exact<{
  blocksToProduce: Scalars['U64'];
  time?: InputMaybe<TimeParameters>;
}>;


export type ProduceBlocksMutation = { __typename?: 'Mutation', produceBlocks: any };

export type RegisterQueryVariables = Exact<{
  id: Scalars['ID'];
  register: Scalars['U64'];
}>;


export type RegisterQuery = { __typename?: 'Query', register: any };

export type ResetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ResetMutation = { __typename?: 'Mutation', reset: boolean };

export type ResourcesToSpendQueryVariables = Exact<{
  owner: Scalars['Address'];
  queryPerAsset: Array<SpendQueryElementInput> | SpendQueryElementInput;
  excludedIds?: InputMaybe<ExcludeInput>;
}>;


export type ResourcesToSpendQuery = { __typename?: 'Query', resourcesToSpend: Array<Array<{ __typename?: 'Coin', utxoId: any, owner: any, amount: any, assetId: any, maturity: any, status: CoinStatus, blockCreated: any } | { __typename?: 'Message', messageId: any, amount: any, sender: any, recipient: any, nonce: any, data: any, daHeight: any, fuelBlockSpend?: any | null }>> };

export type SetBreakpointMutationVariables = Exact<{
  id: Scalars['ID'];
  breakpoint: Breakpoint;
}>;


export type SetBreakpointMutation = { __typename?: 'Mutation', setBreakpoint: boolean };

export type SetSingleSteppingMutationVariables = Exact<{
  id: Scalars['ID'];
  enable: Scalars['Boolean'];
}>;


export type SetSingleSteppingMutation = { __typename?: 'Mutation', setSingleStepping: boolean };

export type StartSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type StartSessionMutation = { __typename?: 'Mutation', startSession: string };

export type StartTxMutationVariables = Exact<{
  id: Scalars['ID'];
  txJson: Scalars['String'];
}>;


export type StartTxMutation = { __typename?: 'Mutation', startTx: { __typename?: 'RunResult', state: RunState, jsonReceipts: Array<string>, breakpoint?: { __typename?: 'OutputBreakpoint', contract: any, pc: any } | null } };

export type StatusChangeSubscriptionVariables = Exact<{
  id: Scalars['TransactionId'];
}>;


export type StatusChangeSubscription = { __typename?: 'Subscription', statusChange: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } };

export type SubmitMutationVariables = Exact<{
  tx: Scalars['HexString'];
}>;


export type SubmitMutation = { __typename?: 'Mutation', submit: { __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null } };

export type TransactionQueryVariables = Exact<{
  id: Scalars['TransactionId'];
}>;


export type TransactionQuery = { __typename?: 'Query', transaction?: { __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null } | null };

export type TransactionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type TransactionsQuery = { __typename?: 'Query', transactions: { __typename?: 'TransactionConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'TransactionEdge', cursor: string, node: { __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, salt: any } | null }> | null } }>, nodes: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> } };

export type TransactionsByOwnerQueryVariables = Exact<{
  owner: Scalars['Address'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type TransactionsByOwnerQuery = { __typename?: 'Query', transactionsByOwner: { __typename?: 'TransactionConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'TransactionEdge', cursor: string, node: { __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null } }>, nodes: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, status?: { __typename?: 'FailureStatus', time: any, reason: string, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | { __typename?: 'SqueezedOutStatus', reason: string } | { __typename?: 'SubmittedStatus', time: any } | { __typename?: 'SuccessStatus', time: any, block: { __typename?: 'Block', id: any, header: { __typename?: 'Header', id: any, daHeight: any, transactionsCount: any, outputMessagesCount: any, transactionsRoot: any, outputMessagesRoot: any, height: any, prevRoot: any, time: any }, consensus: { __typename?: 'Genesis', chainConfigHash: any, coinsRoot: any, contractsRoot: any, messagesRoot: any } | { __typename?: 'PoAConsensus', signature: any }, transactions: Array<{ __typename?: 'Transaction', id: any, inputAssetIds?: Array<any> | null, gasPrice?: any | null, gasLimit?: any | null, maturity?: any | null, txPointer?: any | null, isScript: boolean, isCreate: boolean, isMint: boolean, witnesses?: Array<any> | null, receiptsRoot?: any | null, script?: any | null, scriptData?: any | null, bytecodeWitnessIndex?: number | null, bytecodeLength?: any | null, salt?: any | null, storageSlots?: Array<any> | null, rawPayload: any, inputContracts?: Array<{ __typename?: 'Contract', id: any, bytecode: any, salt: any }> | null, inputs?: Array<{ __typename?: 'InputCoin', utxoId: any, owner: any, amount: any, assetId: any, txPointer: any, witnessIndex: number, maturity: any, predicate: any, predicateData: any } | { __typename?: 'InputContract', utxoId: any, balanceRoot: any, stateRoot: any, txPointer: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'InputMessage', messageId: any, sender: any, recipient: any, amount: any, nonce: any, witnessIndex: number, data: any, predicate: any, predicateData: any }> | null, outputs: Array<{ __typename?: 'ChangeOutput', to: any, amount: any, assetId: any } | { __typename?: 'CoinOutput', to: any, amount: any, assetId: any } | { __typename?: 'ContractCreated', stateRoot: any, contract: { __typename?: 'Contract', id: any, bytecode: any, salt: any } } | { __typename?: 'ContractOutput', inputIndex: number, balanceRoot: any, stateRoot: any } | { __typename?: 'MessageOutput', recipient: any, amount: any } | { __typename?: 'VariableOutput', to: any, amount: any, assetId: any }>, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> }, programState?: { __typename?: 'ProgramState', returnType: ReturnType, data: any } | null } | null, receipts?: Array<{ __typename?: 'Receipt', pc?: any | null, is?: any | null, toAddress?: any | null, amount?: any | null, assetId?: any | null, gas?: any | null, param1?: any | null, param2?: any | null, val?: any | null, ptr?: any | null, digest?: any | null, reason?: any | null, ra?: any | null, rb?: any | null, rc?: any | null, rd?: any | null, len?: any | null, receiptType: ReceiptType, rawPayload: any, result?: any | null, gasUsed?: any | null, data?: any | null, messageId?: any | null, sender?: any | null, recipient?: any | null, nonce?: any | null, contractId?: any | null, contract?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null, to?: { __typename?: 'Contract', id: any, bytecode: any, salt: any } | null }> | null }> } };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Consensus": [
      "Genesis",
      "PoAConsensus"
    ],
    "Input": [
      "InputCoin",
      "InputContract",
      "InputMessage"
    ],
    "Output": [
      "ChangeOutput",
      "CoinOutput",
      "ContractCreated",
      "ContractOutput",
      "MessageOutput",
      "VariableOutput"
    ],
    "Resource": [
      "Coin",
      "Message"
    ],
    "TransactionStatus": [
      "FailureStatus",
      "SqueezedOutStatus",
      "SubmittedStatus",
      "SuccessStatus"
    ]
  }
};
      export default result;
    
export const HeaderFieldsFragmentDoc = `
    fragment HeaderFields on Header {
  id
  daHeight
  transactionsCount
  outputMessagesCount
  transactionsRoot
  outputMessagesRoot
  height
  prevRoot
  time
}
    `;
export const ConsensusFieldsFragmentDoc = `
    fragment ConsensusFields on Consensus {
  ... on Genesis {
    chainConfigHash
    coinsRoot
    contractsRoot
    messagesRoot
  }
  ... on PoAConsensus {
    signature
  }
}
    `;
export const ContractFieldsFragmentDoc = `
    fragment ContractFields on Contract {
  id
  bytecode
  salt
}
    `;
export const InputFieldsFragmentDoc = `
    fragment InputFields on Input {
  ... on InputCoin {
    utxoId
    owner
    amount
    assetId
    txPointer
    witnessIndex
    maturity
    predicate
    predicateData
  }
  ... on InputContract {
    utxoId
    balanceRoot
    stateRoot
    txPointer
    contract {
      ...ContractFields
    }
  }
  ... on InputMessage {
    messageId
    sender
    recipient
    amount
    nonce
    witnessIndex
    data
    predicate
    predicateData
  }
}
    `;
export const OutputFieldsFragmentDoc = `
    fragment OutputFields on Output {
  ... on CoinOutput {
    to
    amount
    assetId
  }
  ... on ContractOutput {
    inputIndex
    balanceRoot
    stateRoot
  }
  ... on MessageOutput {
    recipient
    amount
  }
  ... on ChangeOutput {
    to
    amount
    assetId
  }
  ... on VariableOutput {
    to
    amount
    assetId
  }
  ... on ContractCreated {
    contract {
      ...ContractFields
    }
    stateRoot
  }
}
    `;
export const ReceiptFieldsFragmentDoc = `
    fragment ReceiptFields on Receipt {
  contract {
    ...ContractFields
  }
  pc
  is
  to {
    ...ContractFields
  }
  toAddress
  amount
  assetId
  gas
  param1
  param2
  val
  ptr
  digest
  reason
  ra
  rb
  rc
  rd
  len
  receiptType
  rawPayload
  result
  gasUsed
  data
  messageId
  sender
  recipient
  nonce
  contractId
}
    `;
export const TransactionFieldsFragmentDoc = `
    fragment TransactionFields on Transaction {
  id
  inputAssetIds
  inputContracts {
    ...ContractFields
  }
  gasPrice
  gasLimit
  maturity
  txPointer
  isScript
  isCreate
  isMint
  inputs {
    ...InputFields
  }
  outputs {
    ...OutputFields
  }
  witnesses
  receiptsRoot
  receipts {
    ...ReceiptFields
  }
  script
  scriptData
  bytecodeWitnessIndex
  bytecodeLength
  salt
  storageSlots
  rawPayload
}
    `;
export const BlockFieldsFragmentDoc = `
    fragment BlockFields on Block {
  id
  header {
    ...HeaderFields
  }
  consensus {
    ...ConsensusFields
  }
  transactions {
    ...TransactionFields
  }
}
    `;
export const ProgramStateFieldsFragmentDoc = `
    fragment ProgramStateFields on ProgramState {
  returnType
  data
}
    `;
export const TransactionStatusFieldsFragmentDoc = `
    fragment TransactionStatusFields on TransactionStatus {
  ... on SubmittedStatus {
    time
  }
  ... on SuccessStatus {
    block {
      ...BlockFields
    }
    time
    programState {
      ...ProgramStateFields
    }
  }
  ... on SqueezedOutStatus {
    reason
  }
  ... on FailureStatus {
    block {
      ...BlockFields
    }
    time
    reason
    programState {
      ...ProgramStateFields
    }
  }
}
    `;
export const ResourceFieldsFragmentDoc = `
    fragment ResourceFields on Resource {
  ... on Coin {
    utxoId
    owner
    amount
    assetId
    maturity
    status
    blockCreated
  }
  ... on Message {
    messageId
    amount
    sender
    recipient
    nonce
    data
    daHeight
    fuelBlockSpend
  }
}
    `;
export const BalanceDocument = `
    query balance($owner: Address!, $assetId: AssetId!) {
  balance(owner: $owner, assetId: $assetId) {
    owner
    amount
    assetId
  }
}
    `;
export const useBalanceQuery = <
      TData = BalanceQuery,
      TError = unknown
    >(
      variables: BalanceQueryVariables,
      options?: UseQueryOptions<BalanceQuery, TError, TData>
    ) =>
    useQuery<BalanceQuery, TError, TData>(
      ['balance', variables],
      fetchData<BalanceQuery, BalanceQueryVariables>(BalanceDocument, variables),
      options
    );
export const BalancesDocument = `
    query balances($filter: BalanceFilterInput!, $first: Int, $after: String, $last: Int, $before: String) {
  balances(
    filter: $filter
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        owner
        amount
        assetId
      }
    }
    nodes {
      owner
      amount
      assetId
    }
  }
}
    `;
export const useBalancesQuery = <
      TData = BalancesQuery,
      TError = unknown
    >(
      variables: BalancesQueryVariables,
      options?: UseQueryOptions<BalancesQuery, TError, TData>
    ) =>
    useQuery<BalancesQuery, TError, TData>(
      ['balances', variables],
      fetchData<BalancesQuery, BalancesQueryVariables>(BalancesDocument, variables),
      options
    );
export const BlockDocument = `
    query block($id: BlockId, $height: U64) {
  block(id: $id, height: $height) {
    id
    header {
      ...HeaderFields
    }
    consensus {
      ...ConsensusFields
    }
    transactions {
      id
      inputAssetIds
      inputContracts {
        id
        bytecode
        salt
      }
      gasPrice
      gasLimit
      maturity
      txPointer
      isScript
      isCreate
      isMint
      inputs {
        ...InputFields
      }
      outputs {
        ...OutputFields
      }
      witnesses
      receiptsRoot
      status {
        ...TransactionStatusFields
      }
      receipts {
        contract {
          id
          bytecode
          salt
        }
        pc
        is
        to {
          id
          bytecode
          salt
        }
        toAddress
        amount
        assetId
        gas
        param1
        param2
        val
        ptr
        digest
        reason
        ra
        rb
        rc
        rd
        len
        receiptType
        rawPayload
        result
        gasUsed
        data
        messageId
        sender
        recipient
        nonce
        contractId
      }
      script
      scriptData
      bytecodeWitnessIndex
      bytecodeLength
      salt
      storageSlots
      rawPayload
    }
  }
}
    ${HeaderFieldsFragmentDoc}
${ConsensusFieldsFragmentDoc}
${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useBlockQuery = <
      TData = BlockQuery,
      TError = unknown
    >(
      variables?: BlockQueryVariables,
      options?: UseQueryOptions<BlockQuery, TError, TData>
    ) =>
    useQuery<BlockQuery, TError, TData>(
      variables === undefined ? ['block'] : ['block', variables],
      fetchData<BlockQuery, BlockQueryVariables>(BlockDocument, variables),
      options
    );
export const BlocksDocument = `
    query blocks($first: Int, $after: String, $last: Int, $before: String) {
  blocks(first: $first, after: $after, last: $last, before: $before) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        header {
          id
          daHeight
          transactionsCount
          outputMessagesCount
          transactionsRoot
          outputMessagesRoot
          height
          prevRoot
          time
          applicationHash
        }
        consensus {
          ...ConsensusFields
        }
        transactions {
          id
          inputAssetIds
          inputContracts {
            id
            bytecode
            salt
          }
          gasPrice
          gasLimit
          maturity
          txPointer
          isScript
          isCreate
          isMint
          inputs {
            ...InputFields
          }
          outputs {
            ...OutputFields
          }
          witnesses
          receiptsRoot
          status {
            ...TransactionStatusFields
          }
          receipts {
            contract {
              id
              bytecode
              salt
            }
            pc
            is
            to {
              id
              bytecode
              salt
            }
            toAddress
            amount
            assetId
            gas
            param1
            param2
            val
            ptr
            digest
            reason
            ra
            rb
            rc
            rd
            len
            receiptType
            rawPayload
            result
            gasUsed
            data
            messageId
            sender
            recipient
            nonce
            contractId
          }
          script
          scriptData
          bytecodeWitnessIndex
          bytecodeLength
          salt
          storageSlots
          rawPayload
        }
      }
    }
    nodes {
      id
      header {
        id
        daHeight
        transactionsCount
        outputMessagesCount
        transactionsRoot
        outputMessagesRoot
        height
        prevRoot
        time
        applicationHash
      }
      consensus {
        ...ConsensusFields
      }
      transactions {
        id
        inputAssetIds
        inputContracts {
          id
          bytecode
          salt
        }
        gasPrice
        gasLimit
        maturity
        txPointer
        isScript
        isCreate
        isMint
        inputs {
          ...InputFields
        }
        outputs {
          ...OutputFields
        }
        witnesses
        receiptsRoot
        status {
          ...TransactionStatusFields
        }
        receipts {
          contract {
            id
            bytecode
            salt
          }
          pc
          is
          to {
            id
            bytecode
            salt
          }
          toAddress
          amount
          assetId
          gas
          param1
          param2
          val
          ptr
          digest
          reason
          ra
          rb
          rc
          rd
          len
          receiptType
          rawPayload
          result
          gasUsed
          data
          messageId
          sender
          recipient
          nonce
          contractId
        }
        script
        scriptData
        bytecodeWitnessIndex
        bytecodeLength
        salt
        storageSlots
        rawPayload
      }
    }
  }
}
    ${ConsensusFieldsFragmentDoc}
${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useBlocksQuery = <
      TData = BlocksQuery,
      TError = unknown
    >(
      variables?: BlocksQueryVariables,
      options?: UseQueryOptions<BlocksQuery, TError, TData>
    ) =>
    useQuery<BlocksQuery, TError, TData>(
      variables === undefined ? ['blocks'] : ['blocks', variables],
      fetchData<BlocksQuery, BlocksQueryVariables>(BlocksDocument, variables),
      options
    );
export const ChainDocument = `
    query chain {
  chain {
    name
    latestBlock {
      id
      header {
        id
        daHeight
        transactionsCount
        outputMessagesCount
        transactionsRoot
        outputMessagesRoot
        height
        prevRoot
        time
        applicationHash
      }
      consensus {
        ...ConsensusFields
      }
      transactions {
        id
        inputAssetIds
        inputContracts {
          id
          bytecode
          salt
        }
        gasPrice
        gasLimit
        maturity
        txPointer
        isScript
        isCreate
        isMint
        inputs {
          ...InputFields
        }
        outputs {
          ...OutputFields
        }
        witnesses
        receiptsRoot
        status {
          ...TransactionStatusFields
        }
        receipts {
          contract {
            id
            bytecode
            salt
          }
          pc
          is
          to {
            id
            bytecode
            salt
          }
          toAddress
          amount
          assetId
          gas
          param1
          param2
          val
          ptr
          digest
          reason
          ra
          rb
          rc
          rd
          len
          receiptType
          rawPayload
          result
          gasUsed
          data
          messageId
          sender
          recipient
          nonce
          contractId
        }
        script
        scriptData
        bytecodeWitnessIndex
        bytecodeLength
        salt
        storageSlots
        rawPayload
      }
    }
    baseChainHeight
    peerCount
    consensusParameters {
      contractMaxSize
      maxInputs
      maxOutputs
      maxWitnesses
      maxGasPerTx
      maxScriptLength
      maxScriptDataLength
      maxStorageSlots
      maxPredicateLength
      maxPredicateDataLength
      gasPriceFactor
      gasPerByte
      maxMessageDataLength
    }
  }
}
    ${ConsensusFieldsFragmentDoc}
${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useChainQuery = <
      TData = ChainQuery,
      TError = unknown
    >(
      variables?: ChainQueryVariables,
      options?: UseQueryOptions<ChainQuery, TError, TData>
    ) =>
    useQuery<ChainQuery, TError, TData>(
      variables === undefined ? ['chain'] : ['chain', variables],
      fetchData<ChainQuery, ChainQueryVariables>(ChainDocument, variables),
      options
    );
export const CoinDocument = `
    query coin($utxoId: UtxoId!) {
  coin(utxoId: $utxoId) {
    utxoId
    owner
    amount
    assetId
    maturity
    status
    blockCreated
  }
}
    `;
export const useCoinQuery = <
      TData = CoinQuery,
      TError = unknown
    >(
      variables: CoinQueryVariables,
      options?: UseQueryOptions<CoinQuery, TError, TData>
    ) =>
    useQuery<CoinQuery, TError, TData>(
      ['coin', variables],
      fetchData<CoinQuery, CoinQueryVariables>(CoinDocument, variables),
      options
    );
export const CoinsDocument = `
    query coins($filter: CoinFilterInput!, $first: Int, $after: String, $last: Int, $before: String) {
  coins(
    filter: $filter
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        utxoId
        owner
        amount
        assetId
        maturity
        status
        blockCreated
      }
    }
    nodes {
      utxoId
      owner
      amount
      assetId
      maturity
      status
      blockCreated
    }
  }
}
    `;
export const useCoinsQuery = <
      TData = CoinsQuery,
      TError = unknown
    >(
      variables: CoinsQueryVariables,
      options?: UseQueryOptions<CoinsQuery, TError, TData>
    ) =>
    useQuery<CoinsQuery, TError, TData>(
      ['coins', variables],
      fetchData<CoinsQuery, CoinsQueryVariables>(CoinsDocument, variables),
      options
    );
export const ContinueTxDocument = `
    mutation continueTx($id: ID!) {
  continueTx(id: $id) {
    state
    breakpoint {
      contract
      pc
    }
    jsonReceipts
  }
}
    `;
export const useContinueTxMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ContinueTxMutation, TError, ContinueTxMutationVariables, TContext>) =>
    useMutation<ContinueTxMutation, TError, ContinueTxMutationVariables, TContext>(
      ['continueTx'],
      (variables?: ContinueTxMutationVariables) => fetchData<ContinueTxMutation, ContinueTxMutationVariables>(ContinueTxDocument, variables)(),
      options
    );
export const ContractDocument = `
    query contract($id: ContractId!) {
  contract(id: $id) {
    id
    bytecode
    salt
  }
}
    `;
export const useContractQuery = <
      TData = ContractQuery,
      TError = unknown
    >(
      variables: ContractQueryVariables,
      options?: UseQueryOptions<ContractQuery, TError, TData>
    ) =>
    useQuery<ContractQuery, TError, TData>(
      ['contract', variables],
      fetchData<ContractQuery, ContractQueryVariables>(ContractDocument, variables),
      options
    );
export const ContractBalanceDocument = `
    query contractBalance($contract: ContractId!, $asset: AssetId!) {
  contractBalance(contract: $contract, asset: $asset) {
    contract
    amount
    assetId
  }
}
    `;
export const useContractBalanceQuery = <
      TData = ContractBalanceQuery,
      TError = unknown
    >(
      variables: ContractBalanceQueryVariables,
      options?: UseQueryOptions<ContractBalanceQuery, TError, TData>
    ) =>
    useQuery<ContractBalanceQuery, TError, TData>(
      ['contractBalance', variables],
      fetchData<ContractBalanceQuery, ContractBalanceQueryVariables>(ContractBalanceDocument, variables),
      options
    );
export const ContractBalancesDocument = `
    query contractBalances($filter: ContractBalanceFilterInput!, $first: Int, $after: String, $last: Int, $before: String) {
  contractBalances(
    filter: $filter
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        contract
        amount
        assetId
      }
    }
    nodes {
      contract
      amount
      assetId
    }
  }
}
    `;
export const useContractBalancesQuery = <
      TData = ContractBalancesQuery,
      TError = unknown
    >(
      variables: ContractBalancesQueryVariables,
      options?: UseQueryOptions<ContractBalancesQuery, TError, TData>
    ) =>
    useQuery<ContractBalancesQuery, TError, TData>(
      ['contractBalances', variables],
      fetchData<ContractBalancesQuery, ContractBalancesQueryVariables>(ContractBalancesDocument, variables),
      options
    );
export const DryRunDocument = `
    mutation dryRun($tx: HexString!, $utxoValidation: Boolean) {
  dryRun(tx: $tx, utxoValidation: $utxoValidation) {
    contract {
      id
      bytecode
      salt
    }
    pc
    is
    to {
      id
      bytecode
      salt
    }
    toAddress
    amount
    assetId
    gas
    param1
    param2
    val
    ptr
    digest
    reason
    ra
    rb
    rc
    rd
    len
    receiptType
    rawPayload
    result
    gasUsed
    data
    messageId
    sender
    recipient
    nonce
    contractId
  }
}
    `;
export const useDryRunMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DryRunMutation, TError, DryRunMutationVariables, TContext>) =>
    useMutation<DryRunMutation, TError, DryRunMutationVariables, TContext>(
      ['dryRun'],
      (variables?: DryRunMutationVariables) => fetchData<DryRunMutation, DryRunMutationVariables>(DryRunDocument, variables)(),
      options
    );
export const EndSessionDocument = `
    mutation endSession($id: ID!) {
  endSession(id: $id)
}
    `;
export const useEndSessionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<EndSessionMutation, TError, EndSessionMutationVariables, TContext>) =>
    useMutation<EndSessionMutation, TError, EndSessionMutationVariables, TContext>(
      ['endSession'],
      (variables?: EndSessionMutationVariables) => fetchData<EndSessionMutation, EndSessionMutationVariables>(EndSessionDocument, variables)(),
      options
    );
export const ExecuteDocument = `
    mutation execute($id: ID!, $op: String!) {
  execute(id: $id, op: $op)
}
    `;
export const useExecuteMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ExecuteMutation, TError, ExecuteMutationVariables, TContext>) =>
    useMutation<ExecuteMutation, TError, ExecuteMutationVariables, TContext>(
      ['execute'],
      (variables?: ExecuteMutationVariables) => fetchData<ExecuteMutation, ExecuteMutationVariables>(ExecuteDocument, variables)(),
      options
    );
export const HealthDocument = `
    query health {
  health
}
    `;
export const useHealthQuery = <
      TData = HealthQuery,
      TError = unknown
    >(
      variables?: HealthQueryVariables,
      options?: UseQueryOptions<HealthQuery, TError, TData>
    ) =>
    useQuery<HealthQuery, TError, TData>(
      variables === undefined ? ['health'] : ['health', variables],
      fetchData<HealthQuery, HealthQueryVariables>(HealthDocument, variables),
      options
    );
export const MemoryDocument = `
    query memory($id: ID!, $start: U64!, $size: U64!) {
  memory(id: $id, start: $start, size: $size)
}
    `;
export const useMemoryQuery = <
      TData = MemoryQuery,
      TError = unknown
    >(
      variables: MemoryQueryVariables,
      options?: UseQueryOptions<MemoryQuery, TError, TData>
    ) =>
    useQuery<MemoryQuery, TError, TData>(
      ['memory', variables],
      fetchData<MemoryQuery, MemoryQueryVariables>(MemoryDocument, variables),
      options
    );
export const MessageProofDocument = `
    query messageProof($transactionId: TransactionId!, $messageId: MessageId!) {
  messageProof(transactionId: $transactionId, messageId: $messageId) {
    proofSet
    proofIndex
    sender
    recipient
    nonce
    amount
    data
    signature
    header {
      id
      daHeight
      transactionsCount
      outputMessagesCount
      transactionsRoot
      outputMessagesRoot
      height
      prevRoot
      time
      applicationHash
    }
  }
}
    `;
export const useMessageProofQuery = <
      TData = MessageProofQuery,
      TError = unknown
    >(
      variables: MessageProofQueryVariables,
      options?: UseQueryOptions<MessageProofQuery, TError, TData>
    ) =>
    useQuery<MessageProofQuery, TError, TData>(
      ['messageProof', variables],
      fetchData<MessageProofQuery, MessageProofQueryVariables>(MessageProofDocument, variables),
      options
    );
export const MessagesDocument = `
    query messages($owner: Address, $first: Int, $after: String, $last: Int, $before: String) {
  messages(
    owner: $owner
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        messageId
        amount
        sender
        recipient
        nonce
        data
        daHeight
        fuelBlockSpend
      }
    }
    nodes {
      messageId
      amount
      sender
      recipient
      nonce
      data
      daHeight
      fuelBlockSpend
    }
  }
}
    `;
export const useMessagesQuery = <
      TData = MessagesQuery,
      TError = unknown
    >(
      variables?: MessagesQueryVariables,
      options?: UseQueryOptions<MessagesQuery, TError, TData>
    ) =>
    useQuery<MessagesQuery, TError, TData>(
      variables === undefined ? ['messages'] : ['messages', variables],
      fetchData<MessagesQuery, MessagesQueryVariables>(MessagesDocument, variables),
      options
    );
export const NodeInfoDocument = `
    query nodeInfo {
  nodeInfo {
    utxoValidation
    vmBacktrace
    minGasPrice
    maxTx
    maxDepth
    nodeVersion
  }
}
    `;
export const useNodeInfoQuery = <
      TData = NodeInfoQuery,
      TError = unknown
    >(
      variables?: NodeInfoQueryVariables,
      options?: UseQueryOptions<NodeInfoQuery, TError, TData>
    ) =>
    useQuery<NodeInfoQuery, TError, TData>(
      variables === undefined ? ['nodeInfo'] : ['nodeInfo', variables],
      fetchData<NodeInfoQuery, NodeInfoQueryVariables>(NodeInfoDocument, variables),
      options
    );
export const ProduceBlocksDocument = `
    mutation produceBlocks($blocksToProduce: U64!, $time: TimeParameters) {
  produceBlocks(blocksToProduce: $blocksToProduce, time: $time)
}
    `;
export const useProduceBlocksMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ProduceBlocksMutation, TError, ProduceBlocksMutationVariables, TContext>) =>
    useMutation<ProduceBlocksMutation, TError, ProduceBlocksMutationVariables, TContext>(
      ['produceBlocks'],
      (variables?: ProduceBlocksMutationVariables) => fetchData<ProduceBlocksMutation, ProduceBlocksMutationVariables>(ProduceBlocksDocument, variables)(),
      options
    );
export const RegisterDocument = `
    query register($id: ID!, $register: U64!) {
  register(id: $id, register: $register)
}
    `;
export const useRegisterQuery = <
      TData = RegisterQuery,
      TError = unknown
    >(
      variables: RegisterQueryVariables,
      options?: UseQueryOptions<RegisterQuery, TError, TData>
    ) =>
    useQuery<RegisterQuery, TError, TData>(
      ['register', variables],
      fetchData<RegisterQuery, RegisterQueryVariables>(RegisterDocument, variables),
      options
    );
export const ResetDocument = `
    mutation reset($id: ID!) {
  reset(id: $id)
}
    `;
export const useResetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ResetMutation, TError, ResetMutationVariables, TContext>) =>
    useMutation<ResetMutation, TError, ResetMutationVariables, TContext>(
      ['reset'],
      (variables?: ResetMutationVariables) => fetchData<ResetMutation, ResetMutationVariables>(ResetDocument, variables)(),
      options
    );
export const ResourcesToSpendDocument = `
    query resourcesToSpend($owner: Address!, $queryPerAsset: [SpendQueryElementInput!]!, $excludedIds: ExcludeInput) {
  resourcesToSpend(
    owner: $owner
    queryPerAsset: $queryPerAsset
    excludedIds: $excludedIds
  ) {
    ...ResourceFields
  }
}
    ${ResourceFieldsFragmentDoc}`;
export const useResourcesToSpendQuery = <
      TData = ResourcesToSpendQuery,
      TError = unknown
    >(
      variables: ResourcesToSpendQueryVariables,
      options?: UseQueryOptions<ResourcesToSpendQuery, TError, TData>
    ) =>
    useQuery<ResourcesToSpendQuery, TError, TData>(
      ['resourcesToSpend', variables],
      fetchData<ResourcesToSpendQuery, ResourcesToSpendQueryVariables>(ResourcesToSpendDocument, variables),
      options
    );
export const SetBreakpointDocument = `
    mutation setBreakpoint($id: ID!, $breakpoint: Breakpoint!) {
  setBreakpoint(id: $id, breakpoint: $breakpoint)
}
    `;
export const useSetBreakpointMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SetBreakpointMutation, TError, SetBreakpointMutationVariables, TContext>) =>
    useMutation<SetBreakpointMutation, TError, SetBreakpointMutationVariables, TContext>(
      ['setBreakpoint'],
      (variables?: SetBreakpointMutationVariables) => fetchData<SetBreakpointMutation, SetBreakpointMutationVariables>(SetBreakpointDocument, variables)(),
      options
    );
export const SetSingleSteppingDocument = `
    mutation setSingleStepping($id: ID!, $enable: Boolean!) {
  setSingleStepping(id: $id, enable: $enable)
}
    `;
export const useSetSingleSteppingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SetSingleSteppingMutation, TError, SetSingleSteppingMutationVariables, TContext>) =>
    useMutation<SetSingleSteppingMutation, TError, SetSingleSteppingMutationVariables, TContext>(
      ['setSingleStepping'],
      (variables?: SetSingleSteppingMutationVariables) => fetchData<SetSingleSteppingMutation, SetSingleSteppingMutationVariables>(SetSingleSteppingDocument, variables)(),
      options
    );
export const StartSessionDocument = `
    mutation startSession {
  startSession
}
    `;
export const useStartSessionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StartSessionMutation, TError, StartSessionMutationVariables, TContext>) =>
    useMutation<StartSessionMutation, TError, StartSessionMutationVariables, TContext>(
      ['startSession'],
      (variables?: StartSessionMutationVariables) => fetchData<StartSessionMutation, StartSessionMutationVariables>(StartSessionDocument, variables)(),
      options
    );
export const StartTxDocument = `
    mutation startTx($id: ID!, $txJson: String!) {
  startTx(id: $id, txJson: $txJson) {
    state
    breakpoint {
      contract
      pc
    }
    jsonReceipts
  }
}
    `;
export const useStartTxMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StartTxMutation, TError, StartTxMutationVariables, TContext>) =>
    useMutation<StartTxMutation, TError, StartTxMutationVariables, TContext>(
      ['startTx'],
      (variables?: StartTxMutationVariables) => fetchData<StartTxMutation, StartTxMutationVariables>(StartTxDocument, variables)(),
      options
    );
export const StatusChangeDocument = `
    subscription statusChange($id: TransactionId!) {
  statusChange(id: $id) {
    ...TransactionStatusFields
  }
}
    ${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${ConsensusFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${InputFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const SubmitDocument = `
    mutation submit($tx: HexString!) {
  submit(tx: $tx) {
    id
    inputAssetIds
    inputContracts {
      id
      bytecode
      salt
    }
    gasPrice
    gasLimit
    maturity
    txPointer
    isScript
    isCreate
    isMint
    inputs {
      ...InputFields
    }
    outputs {
      ...OutputFields
    }
    witnesses
    receiptsRoot
    status {
      ...TransactionStatusFields
    }
    receipts {
      contract {
        id
        bytecode
        salt
      }
      pc
      is
      to {
        id
        bytecode
        salt
      }
      toAddress
      amount
      assetId
      gas
      param1
      param2
      val
      ptr
      digest
      reason
      ra
      rb
      rc
      rd
      len
      receiptType
      rawPayload
      result
      gasUsed
      data
      messageId
      sender
      recipient
      nonce
      contractId
    }
    script
    scriptData
    bytecodeWitnessIndex
    bytecodeLength
    salt
    storageSlots
    rawPayload
  }
}
    ${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${ConsensusFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useSubmitMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SubmitMutation, TError, SubmitMutationVariables, TContext>) =>
    useMutation<SubmitMutation, TError, SubmitMutationVariables, TContext>(
      ['submit'],
      (variables?: SubmitMutationVariables) => fetchData<SubmitMutation, SubmitMutationVariables>(SubmitDocument, variables)(),
      options
    );
export const TransactionDocument = `
    query transaction($id: TransactionId!) {
  transaction(id: $id) {
    id
    inputAssetIds
    inputContracts {
      id
      bytecode
      salt
    }
    gasPrice
    gasLimit
    maturity
    txPointer
    isScript
    isCreate
    isMint
    inputs {
      ...InputFields
    }
    outputs {
      ...OutputFields
    }
    witnesses
    receiptsRoot
    status {
      ...TransactionStatusFields
    }
    receipts {
      contract {
        id
        bytecode
        salt
      }
      pc
      is
      to {
        id
        bytecode
        salt
      }
      toAddress
      amount
      assetId
      gas
      param1
      param2
      val
      ptr
      digest
      reason
      ra
      rb
      rc
      rd
      len
      receiptType
      rawPayload
      result
      gasUsed
      data
      messageId
      sender
      recipient
      nonce
      contractId
    }
    script
    scriptData
    bytecodeWitnessIndex
    bytecodeLength
    salt
    storageSlots
    rawPayload
  }
}
    ${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${ConsensusFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useTransactionQuery = <
      TData = TransactionQuery,
      TError = unknown
    >(
      variables: TransactionQueryVariables,
      options?: UseQueryOptions<TransactionQuery, TError, TData>
    ) =>
    useQuery<TransactionQuery, TError, TData>(
      ['transaction', variables],
      fetchData<TransactionQuery, TransactionQueryVariables>(TransactionDocument, variables),
      options
    );
export const TransactionsDocument = `
    query transactions($first: Int, $after: String, $last: Int, $before: String) {
  transactions(first: $first, after: $after, last: $last, before: $before) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        inputAssetIds
        inputContracts {
          id
          bytecode
          salt
        }
        gasPrice
        gasLimit
        maturity
        txPointer
        isScript
        isCreate
        isMint
        inputs {
          ...InputFields
        }
        outputs {
          ...OutputFields
        }
        witnesses
        receiptsRoot
        status {
          ...TransactionStatusFields
        }
        receipts {
          contract {
            id
            salt
          }
          pc
          is
          to {
            id
            salt
          }
          toAddress
          amount
          assetId
          gas
          param1
          param2
          val
          ptr
          digest
          reason
          ra
          rb
          rc
          rd
          len
          receiptType
          rawPayload
          result
          gasUsed
          data
          messageId
          sender
          recipient
          nonce
          contractId
        }
        script
        scriptData
        bytecodeWitnessIndex
        bytecodeLength
        salt
        storageSlots
        rawPayload
      }
    }
    nodes {
      id
      inputAssetIds
      inputContracts {
        id
        bytecode
        salt
      }
      gasPrice
      gasLimit
      maturity
      txPointer
      isScript
      isCreate
      isMint
      inputs {
        ...InputFields
      }
      outputs {
        ...OutputFields
      }
      witnesses
      receiptsRoot
      status {
        ...TransactionStatusFields
      }
      receipts {
        contract {
          id
          bytecode
          salt
        }
        pc
        is
        to {
          id
          bytecode
          salt
        }
        toAddress
        amount
        assetId
        gas
        param1
        param2
        val
        ptr
        digest
        reason
        ra
        rb
        rc
        rd
        len
        receiptType
        rawPayload
        result
        gasUsed
        data
        messageId
        sender
        recipient
        nonce
        contractId
      }
      script
      scriptData
      bytecodeWitnessIndex
      bytecodeLength
      salt
      storageSlots
      rawPayload
    }
  }
}
    ${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${ConsensusFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useTransactionsQuery = <
      TData = TransactionsQuery,
      TError = unknown
    >(
      variables?: TransactionsQueryVariables,
      options?: UseQueryOptions<TransactionsQuery, TError, TData>
    ) =>
    useQuery<TransactionsQuery, TError, TData>(
      variables === undefined ? ['transactions'] : ['transactions', variables],
      fetchData<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, variables),
      options
    );
export const TransactionsByOwnerDocument = `
    query transactionsByOwner($owner: Address!, $first: Int, $after: String, $last: Int, $before: String) {
  transactionsByOwner(
    owner: $owner
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        inputAssetIds
        inputContracts {
          id
          bytecode
          salt
        }
        gasPrice
        gasLimit
        maturity
        txPointer
        isScript
        isCreate
        isMint
        inputs {
          ...InputFields
        }
        outputs {
          ...OutputFields
        }
        witnesses
        receiptsRoot
        status {
          ...TransactionStatusFields
        }
        receipts {
          contract {
            id
            bytecode
            salt
          }
          pc
          is
          to {
            id
            bytecode
            salt
          }
          toAddress
          amount
          assetId
          gas
          param1
          param2
          val
          ptr
          digest
          reason
          ra
          rb
          rc
          rd
          len
          receiptType
          rawPayload
          result
          gasUsed
          data
          messageId
          sender
          recipient
          nonce
          contractId
        }
        script
        scriptData
        bytecodeWitnessIndex
        bytecodeLength
        salt
        storageSlots
        rawPayload
      }
    }
    nodes {
      id
      inputAssetIds
      inputContracts {
        id
        bytecode
        salt
      }
      gasPrice
      gasLimit
      maturity
      txPointer
      isScript
      isCreate
      isMint
      inputs {
        ...InputFields
      }
      outputs {
        ...OutputFields
      }
      witnesses
      receiptsRoot
      status {
        ...TransactionStatusFields
      }
      receipts {
        contract {
          id
          bytecode
          salt
        }
        pc
        is
        to {
          id
          bytecode
          salt
        }
        toAddress
        amount
        assetId
        gas
        param1
        param2
        val
        ptr
        digest
        reason
        ra
        rb
        rc
        rd
        len
        receiptType
        rawPayload
        result
        gasUsed
        data
        messageId
        sender
        recipient
        nonce
        contractId
      }
      script
      scriptData
      bytecodeWitnessIndex
      bytecodeLength
      salt
      storageSlots
      rawPayload
    }
  }
}
    ${InputFieldsFragmentDoc}
${ContractFieldsFragmentDoc}
${OutputFieldsFragmentDoc}
${TransactionStatusFieldsFragmentDoc}
${BlockFieldsFragmentDoc}
${HeaderFieldsFragmentDoc}
${ConsensusFieldsFragmentDoc}
${TransactionFieldsFragmentDoc}
${ReceiptFieldsFragmentDoc}
${ProgramStateFieldsFragmentDoc}`;
export const useTransactionsByOwnerQuery = <
      TData = TransactionsByOwnerQuery,
      TError = unknown
    >(
      variables: TransactionsByOwnerQueryVariables,
      options?: UseQueryOptions<TransactionsByOwnerQuery, TError, TData>
    ) =>
    useQuery<TransactionsByOwnerQuery, TError, TData>(
      ['transactionsByOwner', variables],
      fetchData<TransactionsByOwnerQuery, TransactionsByOwnerQueryVariables>(TransactionsByOwnerDocument, variables),
      options
    );