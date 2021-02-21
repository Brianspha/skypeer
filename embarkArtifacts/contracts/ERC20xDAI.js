import EmbarkJS from '../embarkjs';

const ERC20xDAIConfig = {"abiDefinition":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x313ce567"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"initialsupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","name":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}],"deployedAddress":"0xb42A0C1bD5b8b9b209816BccAf53ff89fc43DDa4","className":"ERC20xDAI","args":["xDAI","xDAI",18,"9900000000000001000000000000000000000000"],"gas":829498,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038d565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610393565b6101e3610420565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610429565b6101936004803603602081101561023b57600080fd5b50356001600160a01b031661047d565b6100d6610498565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104f8565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610566565b610193600480360360408110156102c157600080fd5b506001600160a01b038135811691602001351661057a565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105a5565b84846105a9565b5060015b92915050565b60055490565b60006103a0848484610695565b610416846103ac6105a5565b610411856040518060600160405280602881526020016109d1602891396001600160a01b038a166000908152600460205260408120906103ea6105a5565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6107f316565b6105a9565b5060019392505050565b60025460ff1690565b60006103836104366105a5565b8461041185600460006104476105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61088a16565b6001600160a01b031660009081526003602052604090205490565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836105056105a5565b8461041185604051806060016040528060258152602001610a42602591396004600061052f6105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6107f316565b60006103836105736105a5565b8484610695565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105ee5760405162461bcd60e51b8152600401808060200182810382526024815260200180610a1e6024913960400191505060405180910390fd5b6001600160a01b0382166106335760405162461bcd60e51b81526004018080602001828103825260228152602001806109686022913960400191505060405180910390fd5b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106da5760405162461bcd60e51b81526004018080602001828103825260258152602001806109f96025913960400191505060405180910390fd5b6001600160a01b03821661071f5760405162461bcd60e51b81526004018080602001828103825260238152602001806109456023913960400191505060405180910390fd5b6107628160405180606001604052806026815260200161098a602691396001600160a01b038616600090815260036020526040902054919063ffffffff6107f316565b6001600160a01b038085166000908152600360205260408082209390935590841681522054610797908263ffffffff61088a16565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108825760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561084757818101518382015260200161082f565b50505050905090810190601f1680156108745780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156108e4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000826108fa57506000610387565b8282028284828161090757fe5b04146108e45760405162461bcd60e51b81526004018080602001828103825260218152602001806109b06021913960400191505060405180910390fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a723058206719febb2523aff7f8","realArgs":[],"code":"60806040523480156200001157600080fd5b5060405162000efc38038062000efc833981810160405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020808301516040909301518651929550929350620000f2916000918701906200038b565b508251620001089060019060208601906200038b565b506002805460ff191660ff841617610100600160a81b03191661010033021790556200014981670de0b6b3a764000062000176602090811b620008eb17901c565b60058190556002546200016c916101009091046001600160a01b031690620001f7565b5050505062000430565b6000826200018757506000620001f1565b828202828482816200019557fe5b0414620001ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018062000edb6021913960400191505060405180910390fd5b90505b92915050565b6001600160a01b0382166200026d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000289816005546200031660201b6200088a1790919060201c565b6005556001600160a01b038216600090815260036020908152604090912054620002be9183906200088a62000316821b17901c565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620001ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003ce57805160ff1916838001178555620003fe565b82800160010185558215620003fe579182015b82811115620003fe578251825591602001919060010190620003e1565b506200040c92915062000410565b5090565b6200042d91905b808211156200040c576000815560010162000417565b90565b610a9b80620004406000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038d565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610393565b6101e3610420565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610429565b6101936004803603602081101561023b57600080fd5b50356001600160a01b031661047d565b6100d6610498565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104f8565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610566565b610193600480360360408110156102c157600080fd5b506001600160a01b038135811691602001351661057a565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105a5565b84846105a9565b5060015b92915050565b60055490565b60006103a0848484610695565b610416846103ac6105a5565b610411856040518060600160405280602881526020016109d1602891396001600160a01b038a166000908152600460205260408120906103ea6105a5565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6107f316565b6105a9565b5060019392505050565b60025460ff1690565b60006103836104366105a5565b8461041185600460006104476105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61088a16565b6001600160a01b031660009081526003602052604090205490565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836105056105a5565b8461041185604051806060016040528060258152602001610a42602591396004600061052f6105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6107f316565b60006103836105736105a5565b8484610695565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105ee5760405162461bcd60e51b8152600401808060200182810382526024815260200180610a1e6024913960400191505060405180910390fd5b6001600160a01b0382166106335760405162461bcd60e51b81526004018080602001828103825260228152602001806109686022913960400191505060405180910390fd5b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106da5760405162461bcd60e51b81526004018080602001828103825260258152602001806109f96025913960400191505060405180910390fd5b6001600160a01b03821661071f5760405162461bcd60e51b81526004018080602001828103825260238152602001806109456023913960400191505060405180910390fd5b6107628160405180606001604052806026815260200161098a602691396001600160a01b038616600090815260036020526040902054919063ffffffff6107f316565b6001600160a01b038085166000908152600360205260408082209390935590841681522054610797908263ffffffff61088a16565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108825760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561084757818101518382015260200161082f565b50505050905090810190601f1680156108745780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156108e4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000826108fa57506000610387565b8282028284828161090757fe5b04146108e45760405162461bcd60e51b81526004018080602001828103825260218152602001806109b06021913960400191505060405180910390fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a723058206719febb2523aff7f80f93b403fcf49b6c5d261a4289db49d3b7b6b3acea997d64736f6c634300050a0032536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038d565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610393565b6101e3610420565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610429565b6101936004803603602081101561023b57600080fd5b50356001600160a01b031661047d565b6100d6610498565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104f8565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610566565b610193600480360360408110156102c157600080fd5b506001600160a01b038135811691602001351661057a565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105a5565b84846105a9565b5060015b92915050565b60055490565b60006103a0848484610695565b610416846103ac6105a5565b610411856040518060600160405280602881526020016109d1602891396001600160a01b038a166000908152600460205260408120906103ea6105a5565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6107f316565b6105a9565b5060019392505050565b60025460ff1690565b60006103836104366105a5565b8461041185600460006104476105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61088a16565b6001600160a01b031660009081526003602052604090205490565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836105056105a5565b8461041185604051806060016040528060258152602001610a42602591396004600061052f6105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6107f316565b60006103836105736105a5565b8484610695565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105ee5760405162461bcd60e51b8152600401808060200182810382526024815260200180610a1e6024913960400191505060405180910390fd5b6001600160a01b0382166106335760405162461bcd60e51b81526004018080602001828103825260228152602001806109686022913960400191505060405180910390fd5b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106da5760405162461bcd60e51b81526004018080602001828103825260258152602001806109f96025913960400191505060405180910390fd5b6001600160a01b03821661071f5760405162461bcd60e51b81526004018080602001828103825260238152602001806109456023913960400191505060405180910390fd5b6107628160405180606001604052806026815260200161098a602691396001600160a01b038616600090815260036020526040902054919063ffffffff6107f316565b6001600160a01b038085166000908152600360205260408082209390935590841681522054610797908263ffffffff61088a16565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108825760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561084757818101518382015260200161082f565b50505050905090810190601f1680156108745780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156108e4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000826108fa57506000610387565b8282028284828161090757fe5b04146108e45760405162461bcd60e51b81526004018080602001828103825260218152602001806109b06021913960400191505060405180910390fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a723058206719febb2523aff7f80f93b403fcf49b6c5d261a4289db49d3b7b6b3acea997d64736f6c634300050a0032","linkReferences":{},"swarmHash":"0f93b403fcf49b6c5d261a4289db49d3b7b6b3acea997d64736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"543000","executionCost":"infinite","totalCost":"infinite"},"external":{"allowance(address,address)":"716","approve(address,uint256)":"infinite","balanceOf(address)":"587","decimals()":"480","decreaseAllowance(address,uint256)":"infinite","increaseAllowance(address,uint256)":"infinite","name()":"infinite","symbol()":"infinite","totalSupply()":"421","transfer(address,uint256)":"infinite","transferFrom(address,address,uint256)":"infinite"},"internal":{"_approve(address,address,uint256)":"infinite","_burn(address,uint256)":"infinite","_burnFrom(address,uint256)":"infinite","_mint(address,uint256)":"infinite","_transfer(address,address,uint256)":"infinite"}},"functionHashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","decimals()":"313ce567","decreaseAllowance(address,uint256)":"a457c2d7","increaseAllowance(address,uint256)":"39509351","name()":"06fdde03","symbol()":"95d89b41","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"filename":"/Users/powerbite/Documents/myrepos/skypeer/.embark/contracts/ERC20xDAI.sol","originalFilename":"contracts/ERC20xDAI.sol","path":"/Users/powerbite/Documents/myrepos/skypeer/contracts/ERC20xDAI.sol","type":"file","deploymentAccount":"0x99408d71dE20A501cD7059087Ef87b24e0d8E7a7","transactionHash":"0xcf42af0bc4398414b8b9f2c0b9e8e6d6027c07ba05b4b47663e80ffd53a4bfa5"};
const ERC20xDAI = new EmbarkJS.Blockchain.Contract(ERC20xDAIConfig);

export default ERC20xDAI;
