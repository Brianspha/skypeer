import EmbarkJS from '../embarkjs';

const PauserRoleWithoutRenounceConfig = {"abiDefinition":[{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"}],"className":"PauserRoleWithoutRenounce","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100415760003560e01c806346fbf68e1461004657806382dc1ec41461008d578063c4d66de8146100c2575b600080fd5b6100796004803603602081101561005c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100f5565b604080519115158252519081900360200190f35b6100c0600480360360208110156100a357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661010e565b005b6100c0600480360360208110156100d857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610165565b600061010860338363ffffffff61021e16565b92915050565b61011e61011961029f565b6100f5565b6101595760405162461bcd60e51b815260040180806020018281038252603081526020018061038d6030913960400191505060405180910390fd5b610162816102a3565b50565b600054610100900460ff168061017e575061017e6102f8565b8061018c575060005460ff16155b6101c75760405162461bcd60e51b815260040180806020018281038252602e8152602001806103df602e913960400191505060405180910390fd5b600054610100900460ff161580156101f2576000805460ff1961ff0019909116610100171660011790555b6101fb826100f5565b61020857610208826102a3565b801561021a576000805461ff00191690555b5050565b600073ffffffffffffffffffffffffffffffffffffffff82166102725760405162461bcd60e51b81526004018080602001828103825260228152602001806103bd6022913960400191505060405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff166000908152602091909152604090205460ff1690565b3390565b6102b460338263ffffffff6102fe16565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b610308828261021e565b1561035a576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff16600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820b1805259462b1cdbc2","realArgs":[],"code":"6080604052610441806100136000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806346fbf68e1461004657806382dc1ec41461008d578063c4d66de8146100c2575b600080fd5b6100796004803603602081101561005c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100f5565b604080519115158252519081900360200190f35b6100c0600480360360208110156100a357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661010e565b005b6100c0600480360360208110156100d857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610165565b600061010860338363ffffffff61021e16565b92915050565b61011e61011961029f565b6100f5565b6101595760405162461bcd60e51b815260040180806020018281038252603081526020018061038d6030913960400191505060405180910390fd5b610162816102a3565b50565b600054610100900460ff168061017e575061017e6102f8565b8061018c575060005460ff16155b6101c75760405162461bcd60e51b815260040180806020018281038252602e8152602001806103df602e913960400191505060405180910390fd5b600054610100900460ff161580156101f2576000805460ff1961ff0019909116610100171660011790555b6101fb826100f5565b61020857610208826102a3565b801561021a576000805461ff00191690555b5050565b600073ffffffffffffffffffffffffffffffffffffffff82166102725760405162461bcd60e51b81526004018080602001828103825260228152602001806103bd6022913960400191505060405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff166000908152602091909152604090205460ff1690565b3390565b6102b460338263ffffffff6102fe16565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b610308828261021e565b1561035a576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff16600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820b1805259462b1cdbc2ca19737da09fa77035ef60cdf90a32dcbcdfcf14e9e9eb64736f6c634300050a0032","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100415760003560e01c806346fbf68e1461004657806382dc1ec41461008d578063c4d66de8146100c2575b600080fd5b6100796004803603602081101561005c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100f5565b604080519115158252519081900360200190f35b6100c0600480360360208110156100a357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661010e565b005b6100c0600480360360208110156100d857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610165565b600061010860338363ffffffff61021e16565b92915050565b61011e61011961029f565b6100f5565b6101595760405162461bcd60e51b815260040180806020018281038252603081526020018061038d6030913960400191505060405180910390fd5b610162816102a3565b50565b600054610100900460ff168061017e575061017e6102f8565b8061018c575060005460ff16155b6101c75760405162461bcd60e51b815260040180806020018281038252602e8152602001806103df602e913960400191505060405180910390fd5b600054610100900460ff161580156101f2576000805460ff1961ff0019909116610100171660011790555b6101fb826100f5565b61020857610208826102a3565b801561021a576000805461ff00191690555b5050565b600073ffffffffffffffffffffffffffffffffffffffff82166102725760405162461bcd60e51b81526004018080602001828103825260228152602001806103bd6022913960400191505060405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff166000908152602091909152604090205460ff1690565b3390565b6102b460338263ffffffff6102fe16565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b610308828261021e565b1561035a576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff16600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820b1805259462b1cdbc2ca19737da09fa77035ef60cdf90a32dcbcdfcf14e9e9eb64736f6c634300050a0032","linkReferences":{},"swarmHash":"ca19737da09fa77035ef60cdf90a32dcbcdfcf14e9e9eb64736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"217800","executionCost":"239","totalCost":"218039"},"external":{"addPauser(address)":"infinite","initialize(address)":"infinite","isPauser(address)":"infinite"},"internal":{"_addPauser(address)":"infinite","_removePauser(address)":"infinite"}},"functionHashes":{"addPauser(address)":"82dc1ec4","initialize(address)":"c4d66de8","isPauser(address)":"46fbf68e"},"filename":"/Users/powerbite/Documents/myrepos/skypeer/.embark/contracts/shared-contracts/lifecycle/PauserRoleWithoutRenounce.sol","originalFilename":"contracts/shared-contracts/lifecycle/PauserRoleWithoutRenounce.sol","path":"/Users/powerbite/Documents/myrepos/skypeer/contracts/shared-contracts/lifecycle/PauserRoleWithoutRenounce.sol","type":"file","deploymentAccount":"0x99408d71dE20A501cD7059087Ef87b24e0d8E7a7"};
const PauserRoleWithoutRenounce = new EmbarkJS.Blockchain.Contract(PauserRoleWithoutRenounceConfig);

export default PauserRoleWithoutRenounce;
