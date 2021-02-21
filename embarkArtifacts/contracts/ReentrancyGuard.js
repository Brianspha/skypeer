import EmbarkJS from '../embarkjs';

const ReentrancyGuardConfig = {"abiDefinition":[{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"className":"ReentrancyGuard","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"608060405234801561001057600080fd5b506004361061002b5760003560e01c80638129fc1c14610030575b600080fd5b61003861003a565b005b600054610100900460ff16806100535750610053610119565b80610061575060005460ff16155b6100b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610120602e913960400191505060405180910390fd5b600054610100900460ff161580156100ff57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0061ff0019909116610100171660011790555b60016033558015610116576000805461ff00191690555b50565b303b159056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820a52451468312eda03b","realArgs":[],"code":"608060405234801561001057600080fd5b50610182806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638129fc1c14610030575b600080fd5b61003861003a565b005b600054610100900460ff16806100535750610053610119565b80610061575060005460ff16155b6100b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610120602e913960400191505060405180910390fd5b600054610100900460ff161580156100ff57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0061ff0019909116610100171660011790555b60016033558015610116576000805461ff00191690555b50565b303b159056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820a52451468312eda03bb6bf24647dafbd6d27d94b3c463e5255961a2df73c70f464736f6c634300050a0032","runtimeBytecode":"608060405234801561001057600080fd5b506004361061002b5760003560e01c80638129fc1c14610030575b600080fd5b61003861003a565b005b600054610100900460ff16806100535750610053610119565b80610061575060005460ff16155b6100b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610120602e913960400191505060405180910390fd5b600054610100900460ff161580156100ff57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0061ff0019909116610100171660011790555b60016033558015610116576000805461ff00191690555b50565b303b159056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820a52451468312eda03bb6bf24647dafbd6d27d94b3c463e5255961a2df73c70f464736f6c634300050a0032","linkReferences":{},"swarmHash":"b6bf24647dafbd6d27d94b3c463e5255961a2df73c70f464736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"77200","executionCost":"129","totalCost":"77329"},"external":{"initialize()":"infinite"}},"functionHashes":{"initialize()":"8129fc1c"},"filename":"/Users/powerbite/Documents/myrepos/skypeer/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/utils/ReentrancyGuard.sol","originalFilename":"contracts//Users/powerbite/Documents/myrepos/skypeer/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/utils/ReentrancyGuard.sol","path":"/Users/powerbite/Documents/myrepos/skypeer/contracts/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/utils/ReentrancyGuard.sol","type":"file","deploymentAccount":"0x99408d71dE20A501cD7059087Ef87b24e0d8E7a7"};
const ReentrancyGuard = new EmbarkJS.Blockchain.Contract(ReentrancyGuardConfig);

export default ReentrancyGuard;
