import EmbarkJS from '../embarkjs';

const RolesConfig = {"abiDefinition":[],"className":"Roles","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a723058208daf128f9f6890ee4c","realArgs":[],"code":"60556023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a723058208daf128f9f6890ee4cf3342bfaecdbfb9e040bc40729d8431ce00c04da6b431264736f6c634300050a0032","runtimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a723058208daf128f9f6890ee4cf3342bfaecdbfb9e040bc40729d8431ce00c04da6b431264736f6c634300050a0032","linkReferences":{},"swarmHash":"f3342bfaecdbfb9e040bc40729d8431ce00c04da6b431264736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"17000","executionCost":"94","totalCost":"17094"},"internal":{"add(struct Roles.Role storage pointer,address)":"infinite","has(struct Roles.Role storage pointer,address)":"infinite","remove(struct Roles.Role storage pointer,address)":"infinite"}},"functionHashes":{},"filename":"/Users/powerbite/Documents/myrepos/skypeer/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/access/Roles.sol","originalFilename":"contracts//Users/powerbite/Documents/myrepos/skypeer/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/access/Roles.sol","path":"/Users/powerbite/Documents/myrepos/skypeer/contracts/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/access/Roles.sol","type":"file","deploymentAccount":"0x99408d71dE20A501cD7059087Ef87b24e0d8E7a7"};
const Roles = new EmbarkJS.Blockchain.Contract(RolesConfig);

export default Roles;
