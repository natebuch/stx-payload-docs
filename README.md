# stx-payload-docs

| [FT Mint](#ft-mint-contract-function) | [NFT Mint Contract Function](#nft-mint-contract-function) | [STX Transfer](#send-stx-contract-function) | [Send STX Memo](#send-stx-memo-contract-function) |
|---|---|---|---|

## FT Mint Contract Function
```
(define-public (mint-ft (amount uint) (recipient principal))
  (ft-mint? doc-ft amount recipient)
)
```

<details>
  <summary>FT Mint JSON Response</summary>

  ```yaml
  {
    "apply": [
        {
            "block_identifier": {
                "index": 19,
                "hash": "0x838b42582e344e05b38e64785e26ddf8964a2a47c17f02c51683d275e947626b"
            },
            "parent_block_identifier": {
                "index": 18,
                "hash": "0x5bf34545c99137b164c5429c5e30ea130fd3b58a850791a7807f2940cc7011dc"
            },
            "timestamp": 1706065907,
            "transactions": [
                {
                    "transaction_identifier": {
                        "hash": "0xb647f63040db55eb6831b1641fe34b270341cc2859761acfe5fb34dcc13a7632"
                    },
                    "operations": [
                        {
                            "operation_identifier": {
                                "index": 0
                            },
                            "type": "CREDIT",
                            "status": "SUCCESS",
                            "account": {
                                "address": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                            },
                            "amount": {
                                "value": 100,
                                "currency": {
                                    "symbol": "TOKEN",
                                    "decimals": 6,
                                    "metadata": {
                                        "asset_class_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-ft",
                                        "asset_identifier": null,
                                        "standard": "SIP10"
                                    }
                                }
                            }
                        }
                    ],
                    "metadata": {
                        "success": true,
                        "raw_tx": "0x808000000004006d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce000000000000000200000000000004ff00015b534c8b4754d2da3f12057d4f0045f44355961427e2078eff64f10795037c955e88e6b2da2701108b27b880c0b30848e11a266a09fff075bf051c8399bc25fa030200000000021a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce0e746573742d66756e6374696f6e73076d696e742d6674000000020100000000000000000000000000000064051a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce",
                        "result": "(ok true)",
                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                        "nonce": 2,
                        "fee": 1279,
                        "kind": {
                            "type": "ContractCall",
                            "data": {
                                "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions",
                                "method": "mint-ft",
                                "args": [
                                    "u100",
                                    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                                ]
                            }
                        },
                        "receipt": {
                            "mutated_contracts_radius": [
                                "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions"
                            ],
                            "mutated_assets_radius": [
                                "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-ft"
                            ],
                            "contract_calls_stack": [],
                            "events": [
                                {
                                    "type": "FTMintEvent",
                                    "data": {
                                        "asset_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-ft",
                                        "recipient": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                                        "amount": "100"
                                    }
                                }
                            ]
                        },
                        "description": "invoked: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::mint-ft(u100, ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)",
                        "sponsor": null,
                        "execution_cost": {
                            "write_length": 1,
                            "write_count": 2,
                            "read_length": 708,
                            "read_count": 5,
                            "runtime": 3008
                        },
                        "position": {
                            "index": 1
                        }
                    }
                }
            ],
            "metadata": {
                "bitcoin_anchor_block_identifier": {
                    "index": 121,
                    "hash": "0x5c45e7b8fe6aa338c2097a9a55cf28b1a37d69513806bff29e537b832391eb4d"
                },
                "pox_cycle_index": 2,
                "pox_cycle_position": 0,
                "pox_cycle_length": 10,
                "confirm_microblock_identifier": {
                    "index": 0,
                    "hash": "0x69370f8df5b05cd3a1ef304e6777d9eb760b6960cc200ca78f4f7ebea76a0ea1"
                },
                "stacks_block_hash": "0xb5d91248250ecfeffcec177059bc0fbcc91be16bc4528588915fd4f760b873aa"
            }
        }
    ],
    "rollback": [],
    "chainhook": {
        "uuid": "1",
        "predicate": {
            "scope": "contract_call",
            "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions",
            "method": "mint-ft"
        },
        "is_streaming_blocks": true
    }
  }
  ```
</details>

#### Root Level

| Key        | Value Type | Description                             | Data                                   |
|------------|------------|-----------------------------------------|----------------------------------------|
| `apply`    | Array      | Array of objects describing block applications. | Array of block application objects.    |
| `rollback` | Array      | Array for rollback information.         | Empty array.                           |
| `chainhook`| Object     | Object describing the chainhook configuration. | Chainhook configuration details.       |

#### `apply` Array Element Structure

#### Block Level

| Key                       | Value Type | Description                           | Data                                   |
|---------------------------|------------|---------------------------------------|----------------------------------------|
| `block_identifier`        | Object     | Contains `index` and `hash` of the block. | `index`: 19, `hash`: `0x838b4258...`   |
| `parent_block_identifier` | Object     | Contains `index` and `hash` of the parent block. | `index`: 18, `hash`: `0x5bf34545...` |
| `timestamp`               | Integer    | Unix timestamp of the block.          | 1706065907                             |
| `transactions`            | Array      | Array of transaction objects.         | Array of transaction details.          |
| `metadata`                | Object     | Additional metadata for the block.    | Metadata details.                      |

#### Transaction Level (within `transactions`)

| Key                      | Value Type | Description                          | Data                                   |
|--------------------------|------------|--------------------------------------|----------------------------------------|
| `transaction_identifier` | Object     | Contains `hash` of the transaction.  | `hash`: `0xb647f63040db55eb...`        |
| `operations`             | Array      | List of operations within the transaction. | Array of operation objects.          |
| `metadata`               | Object     | Metadata for the transaction.        | Transaction metadata details.          |

#### Operations Level (within `operations`)

| Key                    | Value Type | Description                     | Data                                   |
|------------------------|------------|---------------------------------|----------------------------------------|
| `operation_identifier` | Object     | Contains `index` of the operation. | `index`: 0                             |
| `type`                 | String     | Type of the operation.           | `CREDIT`                               |
| `status`               | String     | Status of the operation.         | `SUCCESS`                              |
| `account`              | Object     | Contains the `address` of the account involved. | `address`: `ST1PQHQKV0RJXZFY...`  |
| `amount`               | Object     | Contains `value`, `currency`, and related `metadata`. | `value`: 100, `currency` details.  |

#### `chainhook` Object Structure

| Key          | Value Type | Description                                 | Data                                   |
|--------------|------------|---------------------------------------------|----------------------------------------|
| `uuid`       | String     | Unique identifier for the chainhook.        | `1`                                    |
| `predicate`  | Object     | Conditions for the chainhook trigger.       | Predicate details.                     |
| `is_streaming_blocks` | Boolean | Indicates if blocks are being streamed. | `true`                                 |

#### Predicate Level (within `chainhook`)

| Key                   | Value Type | Description                             | Data                                   |
|-----------------------|------------|-----------------------------------------|----------------------------------------|
| `scope`               | String     | Scope of the trigger.                   | `contract_call`                        |
| `contract_identifier` | String     | Identifier of the contract involved.    | `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions` |
| `method`              | String     | Contract method for the trigger.        | `mint-ft`                              |

## NFT Mint Contract Function
```
(define-public (mint-nft (id uint) (recipient principal))
  (nft-mint? doc-nft id recipient)
)
```
<details>
  <summary>NFT Mint JSON Response</summary>

  ```yaml
  {
    "apply": [
        {
            "block_identifier": {
                "index": 47,
                "hash": "0xa04cf9aa1c86bda838305bd0c025dc718bf8eccc094f430b1ff362ba56f6b4ae"
            },
            "parent_block_identifier": {
                "index": 46,
                "hash": "0x2368186f94eb558c9793472c075b954f7a3e658dae4c04c183bf1c90b9d425c6"
            },
            "timestamp": 1706067587,
            "transactions": [
                {
                    "transaction_identifier": {
                        "hash": "0x8341571b4fb880b2f66ca76c52a7ce8df6adcae466c364361b76677012a74e1c"
                    },
                    "operations": [
                        {
                            "operation_identifier": {
                                "index": 0
                            },
                            "type": "CREDIT",
                            "status": "SUCCESS",
                            "account": {
                                "address": "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5"
                            },
                            "amount": {
                                "value": 1,
                                "currency": {
                                    "symbol": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-nft",
                                    "decimals": 0,
                                    "metadata": {
                                        "asset_class_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-nft",
                                        "asset_identifier": "0x0100000000000000000000000000000005",
                                        "standard": "SIP09"
                                    }
                                }
                            }
                        }
                    ],
                    "metadata": {
                        "success": true,
                        "raw_tx": "0x808000000004006d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce0000000000000003000000000000011c0001a1444ea641ed4780644afa2f46307f0bdf07289b3bebf9b594b5ba1de76d59471c300bcbd9487eb18794199fa3001f525703d714ccfcff32dcdc21f309ae40e103020000000102021a7321b74e2b6a7e949e6c4ad313035b16650950171a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce0e746573742d66756e6374696f6e7307646f632d6e66740200000007646f632d6e667411021a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce0e746573742d66756e6374696f6e73086d696e742d6e6674000000020100000000000000000000000000000005051a7321b74e2b6a7e949e6c4ad313035b1665095017",
                        "result": "(ok true)",
                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                        "nonce": 3,
                        "fee": 284,
                        "kind": {
                            "type": "ContractCall",
                            "data": {
                                "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions",
                                "method": "mint-nft",
                                "args": [
                                    "u5",
                                    "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5"
                                ]
                            }
                        },
                        "receipt": {
                            "mutated_contracts_radius": [
                                "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions"
                            ],
                            "mutated_assets_radius": [
                                "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-nft"
                            ],
                            "contract_calls_stack": [],
                            "events": [
                                {
                                    "type": "NFTMintEvent",
                                    "data": {
                                        "asset_class_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::doc-nft",
                                        "asset_identifier": 5,
                                        "recipient": "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5"
                                    }
                                }
                            ]
                        },
                        "description": "invoked: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::mint-nft(u5, ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5)",
                        "sponsor": null,
                        "execution_cost": {
                            "write_length": 1,
                            "write_count": 1,
                            "read_length": 708,
                            "read_count": 4,
                            "runtime": 2257
                        },
                        "position": {
                            "index": 1
                        }
                    }
                }
            ],
            "metadata": {
                "bitcoin_anchor_block_identifier": {
                    "index": 149,
                    "hash": "0x44d1b0b05e38d648b8388d6630d17ab7fb4f8d6a8d74f5f95e23f8049e897f97"
                },
                "pox_cycle_index": 4,
                "pox_cycle_position": 8,
                "pox_cycle_length": 10,
                "confirm_microblock_identifier": {
                    "index": 0,
                    "hash": "0x6da0c33e888c793f5e04f559964f6e0fa5b110354327a23cc5c52e08bef984da"
                },
                "stacks_block_hash": "0xb9fb48943f388817da94fed5e374d5de443ea4bf58db8cbf87ad19cb9a0b555f"
            }
        }
    ],
    "rollback": [],
    "chainhook": {
        "uuid": "1",
        "predicate": {
            "scope": "contract_call",
            "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions",
            "method": "mint-nft"
        },
        "is_streaming_blocks": true
    }
  }
  ```
</details>

#### Root Level

| Key        | Value Type | Description                             | Data                                   |
|------------|------------|-----------------------------------------|----------------------------------------|
| `apply`    | Array      | Array of objects describing block applications. | Array of block application objects.    |
| `rollback` | Array      | Array for rollback information.         | Empty array.                           |
| `chainhook`| Object     | Object describing the chainhook configuration. | Chainhook configuration details.       |

#### `apply` Array Element Structure

#### Block Level

| Key                       | Value Type | Description                           | Data                                   |
|---------------------------|------------|---------------------------------------|----------------------------------------|
| `block_identifier`        | Object     | Contains `index` and `hash` of the block. | `index`: 47, `hash`: `0xa04cf9aa...`   |
| `parent_block_identifier` | Object     | Contains `index` and `hash` of the parent block. | `index`: 46, `hash`: `0x2368186f...` |
| `timestamp`               | Integer    | Unix timestamp of the block.          | 1706067587                             |
| `transactions`            | Array      | Array of transaction objects.         | Array of transaction details.          |
| `metadata`                | Object     | Additional metadata for the block.    | Metadata details.                      |

#### Transaction Level (within `transactions`)

| Key                      | Value Type | Description                          | Data                                   |
|--------------------------|------------|--------------------------------------|----------------------------------------|
| `transaction_identifier` | Object     | Contains `hash` of the transaction.  | `hash`: `0x8341571b4fb8...`            |
| `operations`             | Array      | List of operations within the transaction. | Array of operation objects.          |
| `metadata`               | Object     | Metadata for the transaction.        | Transaction metadata details.          |

#### Operations Level (within `operations`)

| Key                    | Value Type | Description                     | Data                                   |
|------------------------|------------|---------------------------------|----------------------------------------|
| `operation_identifier` | Object     | Contains `index` of the operation. | `index`: 0                             |
| `type`                 | String     | Type of the operation.           | `CREDIT`                               |
| `status`               | String     | Status of the operation.         | `SUCCESS`                              |
| `account`              | Object     | Contains the `address` of the account involved. | `address`: `ST1SJ3DTE5DN7X54...`  |
| `amount`               | Object     | Contains `value`, `currency`, and related `metadata`. | `value`: 1, `currency` details.  |

#### `chainhook` Object Structure

| Key          | Value Type | Description                                 | Data                                   |
|--------------|------------|---------------------------------------------|----------------------------------------|
| `uuid`       | String     | Unique identifier for the chainhook.        | `1`                                    |
| `predicate`  | Object     | Conditions for the chainhook trigger.       | Predicate details.                     |
| `is_streaming_blocks` | Boolean | Indicates if blocks are being streamed. | `true`                                 |

#### Predicate Level (within `chainhook`)

| Key                   | Value Type | Description                             | Data                                   |
|-----------------------|------------|-----------------------------------------|----------------------------------------|
| `scope`               | String     | Scope of the trigger.                   | `contract_call`                        |
| `contract_identifier` | String     | Identifier of the contract involved.    | `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions` |
| `method`              | String     | Contract method for the trigger.        | `mint-nft`                             |

## Send STX Contract Function
```
(define-public (send-stx (amount uint) (sender principal) (recipient principal))
  (stx-transfer? amount sender recipient)
)
```
<details>
  <summary>Send STX JSON Response</summary>
  
  ```yaml
  {
    "apply": [
        {
            "block_identifier": {
                "index": 12,
                "hash": "0x74acf1d29341fb21f1655946eb22fc9722ddf4f5ca230284f730ee9364b73176"
            },
            "parent_block_identifier": {
                "index": 11,
                "hash": "0xd02719ce9ea5819a8a06f54e1c0a05d168054a288ee84f4914a1e1dc68279f45"
            },
            "timestamp": 1706677177,
            "transactions": [
                {
                    "transaction_identifier": {
                        "hash": "0x2e6df82760a3ea26a41522c4abc32807c4a098d8af5bc2811af5810a36b507ce"
                    },
                    "operations": [
                        {
                            "operation_identifier": {
                                "index": 0
                            },
                            "related_operations": [
                                {
                                    "index": 1
                                }
                            ],
                            "type": "DEBIT",
                            "status": "SUCCESS",
                            "account": {
                                "address": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                            },
                            "amount": {
                                "value": 50,
                                "currency": {
                                    "symbol": "STX",
                                    "decimals": 6
                                }
                            }
                        },
                        {
                            "operation_identifier": {
                                "index": 1
                            },
                            "related_operations": [
                                {
                                    "index": 0
                                }
                            ],
                            "type": "CREDIT",
                            "status": "SUCCESS",
                            "account": {
                                "address": "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5"
                            },
                            "amount": {
                                "value": 50,
                                "currency": {
                                    "symbol": "STX",
                                    "decimals": 6
                                }
                            }
                        }
                    ],
                    "metadata": {
                        "success": true,
                        "raw_tx": "0x808000000004006d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce00000000000000010000000000000102000123dd20cf2b24e741a6f33ece34dd6616b77640b22958792fd987a0e112b58c340765ddb9c6f3987f8a684c1ba8a0b9ce74ab0e4fbfd085acaf5ef09bc1b4406403020000000100021a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce050000000002faf080021a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce0e746573742d66756e6374696f6e730873656e642d737478000000030100000000000000000000000000000032051a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce051a7321b74e2b6a7e949e6c4ad313035b1665095017",
                        "result": "(ok true)",
                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                        "nonce": 1,
                        "fee": 258,
                        "kind": {
                            "type": "ContractCall",
                            "data": {
                                "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions",
                                "method": "send-stx",
                                "args": [
                                    "u50",
                                    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                                    "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5"
                                ]
                            }
                        },
                        "receipt": {
                            "mutated_contracts_radius": [],
                            "mutated_assets_radius": [],
                            "contract_calls_stack": [],
                            "events": [
                                {
                                    "type": "STXTransferEvent",
                                    "data": {
                                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                                        "recipient": "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5",
                                        "amount": "50"
                                    }
                                }
                            ]
                        },
                        "description": "invoked: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions::send-stx(u50, ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM, ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5)",
                        "sponsor": null,
                        "execution_cost": {
                            "write_length": 1,
                            "write_count": 1,
                            "read_length": 1054,
                            "read_count": 4,
                            "runtime": 7140
                        },
                        "position": {
                            "index": 1
                        }
                    }
                }
            ],
            "metadata": {
                "bitcoin_anchor_block_identifier": {
                    "index": 114,
                    "hash": "0x4f149a8755b994f7f4568a79a2a84f3223d0fbbb596bd66979d7943f16fd9792"
                },
                "pox_cycle_index": 1,
                "pox_cycle_position": 3,
                "pox_cycle_length": 10,
                "confirm_microblock_identifier": {
                    "index": 0,
                    "hash": "0xd66f30b9e4acc0d61e5dd81056544f26480b42a6e4c660cdda3c49dfe4fd6fbe"
                },
                "stacks_block_hash": "0x1f02aa3d0d240d452dcd3e4355a7c8bee61b8bea70dc485f50f630e136405e5f"
            }
        }
    ],
    "rollback": [],
    "chainhook": {
        "uuid": "1",
        "predicate": {
            "scope": "contract_call",
            "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions",
            "method": "send-stx"
        },
        "is_streaming_blocks": true
    }
  }
  ```
</details>

#### Root Level

| Key        | Value Type | Description                             | Data                                   |
|------------|------------|-----------------------------------------|----------------------------------------|
| `apply`    | Array      | Array of objects describing block applications. | Array of block application objects.    |
| `rollback` | Array      | Array for rollback information.         | Empty array.                           |
| `chainhook`| Object     | Object describing the chainhook configuration. | Chainhook configuration details.       |

#### `apply` Array Element Structure

#### Block Level

| Key                       | Value Type | Description                           | Data                                   |
|---------------------------|------------|---------------------------------------|----------------------------------------|
| `block_identifier`        | Object     | Contains `index` and `hash` of the block. | `index`: 12, `hash`: `0x74acf1d2...`   |
| `parent_block_identifier` | Object     | Contains `index` and `hash` of the parent block. | `index`: 11, `hash`: `0xd02719ce...` |
| `timestamp`               | Integer    | Unix timestamp of the block.          | 1706677177                             |
| `transactions`            | Array      | Array of transaction objects.         | Array of transaction details.          |
| `metadata`                | Object     | Additional metadata for the block.    | Metadata details.                      |

#### Transaction Level (within `transactions`)

| Key                      | Value Type | Description                          | Data                                   |
|--------------------------|------------|--------------------------------------|----------------------------------------|
| `transaction_identifier` | Object     | Contains `hash` of the transaction.  | `hash`: `0x2e6df82760a3...`            |
| `operations`             | Array      | List of operations within the transaction. | Array of operation objects.          |
| `metadata`               | Object     | Metadata for the transaction.        | Transaction metadata details.          |

#### Operations Level (within `operations`)

| Key                    | Value Type | Description                     | Data                                   |
|------------------------|------------|---------------------------------|----------------------------------------|
| `operation_identifier` | Object     | Contains `index` of the operation. | `index`: 0                             |
| `related_operations`   | Array      | List of related operation indices. | `[ { "index": 1 } ]` for first operation |
| `type`                 | String     | Type of the operation.           | `DEBIT` for first, `CREDIT` for second operation |
| `status`               | String     | Status of the operation.         | `SUCCESS`                              |
| `account`              | Object     | Contains the `address` of the account involved. | `address`: `ST1PQHQKV0RJXZFY...` for first, different for second operation |
| `amount`               | Object     | Contains `value`, `currency`.    | `value`: 50, `currency`: `STX` details |

#### `chainhook` Object Structure

| Key          | Value Type | Description                                 | Data                                   |
|--------------|------------|---------------------------------------------|----------------------------------------|
| `uuid`       | String     | Unique identifier for the chainhook.        | `1`                                    |
| `predicate`  | Object     | Conditions for the chainhook trigger.       | Predicate details.                     |
| `is_streaming_blocks` | Boolean | Indicates if blocks are being streamed. | `true`                                 |

#### Predicate Level (within `chainhook`)

| Key                   | Value Type | Description                             | Data                                   |
|-----------------------|------------|-----------------------------------------|----------------------------------------|
| `scope`               | String     | Scope of the trigger.                   | `contract_call`                        |
| `contract_identifier` | String     | Identifier of the contract involved.    | `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions` |
| `method`              | String     | Contract method for the trigger.        | `send-stx`                             |

## Send Stx Memo Contract Function

```
(define-public (send-stx-memo (amount uint) (sender principal) (recipient principal) (memo (buff 34)))
  (stx-transfer-memo? amount sender recipient memo)
)
```
<details>
  <summary>Send STX Memo JSON Response</summary>

  ```yaml
  {
    "apply": [
        {
            "block_identifier": {
                "hash": "0x85e30d4f05d3890f6ac24cf8ce6c723632f3a18a6eb6844c0d6779662e06355d",
                "index": 145200
            },
            "metadata": {
                "bitcoin_anchor_block_identifier": {
                    "hash": "0x0000000007b2f94fce28daae4e9546884b24a7ebdb6fdb3d464e6eeade26dfee",
                    "index": 2575852
                },
                "confirm_microblock_identifier": {
                    "hash": "0x42727a2ee36039c2c15b1da24a01cfe6ab20fac47e52e269248b0cbaedd19e73",
                    "index": 2
                },
                "pox_cycle_index": 548,
                "pox_cycle_length": 1050,
                "pox_cycle_position": 451,
                "stacks_block_hash": "0x9c318a82acb5c5578782a784e4150304073d5574a1a5911f8c589dc85f91ddb1"
            },
            "parent_block_identifier": {
                "hash": "0x5bfce0e9b0b959776538423a520541e0d4b281c61b666a71f7abb4e964a79a60",
                "index": 145199
            },
            "timestamp": 1706334564,
            "transactions": [
                {
                    "metadata": {
                        "description": "invoked: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2::send-stx-memo(u100, ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM, ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50, 0x4865726520696e206c696573206d656d6f)",
                        "execution_cost": {
                            "read_count": 4,
                            "read_length": 998,
                            "runtime": 7304,
                            "write_count": 1,
                            "write_length": 1
                        },
                        "fee": 3000,
                        "kind": {
                            "data": {
                                "args": [
                                    "u100",
                                    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                                    "ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50",
                                    "0x4865726520696e206c696573206d656d6f"
                                ],
                                "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2",
                                "method": "send-stx-memo"
                            },
                            "type": "ContractCall"
                        },
                        "nonce": 904,
                        "position": {
                            "index": 2
                        },
                        "raw_tx": "0x808000000004006d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce00000000000003880000000000000bb800015bb7565de5cc58b05ffb8437578f7501943270332f961d380a14199d7697391851d47ec9578b13dd78309baeda22f3d0dc5b0eba25534261ac8794d3e33b5a7d030200000000021a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce11746573742d66756e6374696f6e732d76320d73656e642d7374782d6d656d6f000000040100000000000000000000000000000064051a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce051ab3a14500ad8ac4e6d823ab20fd2c6d1369aa5bb702000000114865726520696e206c696573206d656d6f",
                        "receipt": {
                            "contract_calls_stack": [],
                            "events": [
                                {
                                    "data": {
                                        "amount": "100",
                                        "recipient": "ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50",
                                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                                    },
                                    "type": "STXTransferEvent"
                                }
                            ],
                            "mutated_assets_radius": [],
                            "mutated_contracts_radius": []
                        },
                        "result": "(ok true)",
                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                        "sponsor": null,
                        "success": false
                    },
                    "operations": [
                        {
                            "account": {
                                "address": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                            },
                            "amount": {
                                "currency": {
                                    "decimals": 6,
                                    "symbol": "STX"
                                },
                                "value": 100
                            },
                            "operation_identifier": {
                                "index": 0
                            },
                            "related_operations": [
                                {
                                    "index": 1
                                }
                            ],
                            "status": "SUCCESS",
                            "type": "DEBIT"
                        },
                        {
                            "account": {
                                "address": "ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50"
                            },
                            "amount": {
                                "currency": {
                                    "decimals": 6,
                                    "symbol": "STX"
                                },
                                "value": 100
                            },
                            "operation_identifier": {
                                "index": 1
                            },
                            "related_operations": [
                                {
                                    "index": 0
                                }
                            ],
                            "status": "SUCCESS",
                            "type": "CREDIT"
                        }
                    ],
                    "transaction_identifier": {
                        "hash": "0x9cbf434f11b2602d3319f7dfea712a9438c8607b21de42b3cedb4116d947b827"
                    }
                }
            ]
        }
    ],
    "chainhook": {
        "is_streaming_blocks": false,
        "predicate": {
            "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2",
            "method": "send-stx-memo",
            "scope": "contract_call"
        },
        "uuid": "1"
    },
    "rollback": []
  }{
    "apply": [
        {
            "block_identifier": {
                "hash": "0x85e30d4f05d3890f6ac24cf8ce6c723632f3a18a6eb6844c0d6779662e06355d",
                "index": 145200
            },
            "metadata": {
                "bitcoin_anchor_block_identifier": {
                    "hash": "0x0000000007b2f94fce28daae4e9546884b24a7ebdb6fdb3d464e6eeade26dfee",
                    "index": 2575852
                },
                "confirm_microblock_identifier": {
                    "hash": "0x42727a2ee36039c2c15b1da24a01cfe6ab20fac47e52e269248b0cbaedd19e73",
                    "index": 2
                },
                "pox_cycle_index": 548,
                "pox_cycle_length": 1050,
                "pox_cycle_position": 451,
                "stacks_block_hash": "0x9c318a82acb5c5578782a784e4150304073d5574a1a5911f8c589dc85f91ddb1"
            },
            "parent_block_identifier": {
                "hash": "0x5bfce0e9b0b959776538423a520541e0d4b281c61b666a71f7abb4e964a79a60",
                "index": 145199
            },
            "timestamp": 1706334564,
            "transactions": [
                {
                    "metadata": {
                        "description": "invoked: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2::send-stx-memo(u100, ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM, ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50, 0x4865726520696e206c696573206d656d6f)",
                        "execution_cost": {
                            "read_count": 4,
                            "read_length": 998,
                            "runtime": 7304,
                            "write_count": 1,
                            "write_length": 1
                        },
                        "fee": 3000,
                        "kind": {
                            "data": {
                                "args": [
                                    "u100",
                                    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                                    "ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50",
                                    "0x4865726520696e206c696573206d656d6f"
                                ],
                                "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2",
                                "method": "send-stx-memo"
                            },
                            "type": "ContractCall"
                        },
                        "nonce": 904,
                        "position": {
                            "index": 2
                        },
                        "raw_tx": "0x808000000004006d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce00000000000003880000000000000bb800015bb7565de5cc58b05ffb8437578f7501943270332f961d380a14199d7697391851d47ec9578b13dd78309baeda22f3d0dc5b0eba25534261ac8794d3e33b5a7d030200000000021a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce11746573742d66756e6374696f6e732d76320d73656e642d7374782d6d656d6f000000040100000000000000000000000000000064051a6d78de7b0625dfbfc16c3a8a5735f6dc3dc3f2ce051ab3a14500ad8ac4e6d823ab20fd2c6d1369aa5bb702000000114865726520696e206c696573206d656d6f",
                        "receipt": {
                            "contract_calls_stack": [],
                            "events": [
                                {
                                    "data": {
                                        "amount": "100",
                                        "recipient": "ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50",
                                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                                    },
                                    "type": "STXTransferEvent"
                                }
                            ],
                            "mutated_assets_radius": [],
                            "mutated_contracts_radius": []
                        },
                        "result": "(ok true)",
                        "sender": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
                        "sponsor": null,
                        "success": false
                    },
                    "operations": [
                        {
                            "account": {
                                "address": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
                            },
                            "amount": {
                                "currency": {
                                    "decimals": 6,
                                    "symbol": "STX"
                                },
                                "value": 100
                            },
                            "operation_identifier": {
                                "index": 0
                            },
                            "related_operations": [
                                {
                                    "index": 1
                                }
                            ],
                            "status": "SUCCESS",
                            "type": "DEBIT"
                        },
                        {
                            "account": {
                                "address": "ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50"
                            },
                            "amount": {
                                "currency": {
                                    "decimals": 6,
                                    "symbol": "STX"
                                },
                                "value": 100
                            },
                            "operation_identifier": {
                                "index": 1
                            },
                            "related_operations": [
                                {
                                    "index": 0
                                }
                            ],
                            "status": "SUCCESS",
                            "type": "CREDIT"
                        }
                    ],
                    "transaction_identifier": {
                        "hash": "0x9cbf434f11b2602d3319f7dfea712a9438c8607b21de42b3cedb4116d947b827"
                    }
                }
            ]
        }
    ],
    "chainhook": {
        "is_streaming_blocks": false,
        "predicate": {
            "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2",
            "method": "send-stx-memo",
            "scope": "contract_call"
        },
        "uuid": "1"
    },
    "rollback": []
  }
  ```
</details>

#### Root Level

| Key        | Value Type | Description                             | Data                                   |
|------------|------------|-----------------------------------------|----------------------------------------|
| `apply`    | Array      | Array of objects describing block applications. | Array of block application objects.    |
| `rollback` | Array      | Array for rollback information.         | Empty array.                           |
| `chainhook`| Object     | Object describing the chainhook configuration. | Chainhook configuration details.       |

#### `apply` Array Element Structure

#### Block Level

| Key                       | Value Type | Description                           | Data                                   |
|---------------------------|------------|---------------------------------------|----------------------------------------|
| `block_identifier`        | Object     | Contains `hash` and `index` of the block. | `hash`: `0x85e30d4f...`, `index`: 145200 |
| `parent_block_identifier` | Object     | Contains `hash` and `index` of the parent block. | `hash`: `0x5bfce0e9...`, `index`: 145199 |
| `timestamp`               | Integer    | Unix timestamp of the block.          | 1706334564                             |
| `metadata`                | Object     | Additional metadata for the block.    | Metadata details including bitcoin anchor, pox cycle information, etc. |

#### Transaction Level (within `transactions`)

| Key                      | Value Type | Description                          | Data                                   |
|--------------------------|------------|--------------------------------------|----------------------------------------|
| `transaction_identifier` | Object     | Contains `hash` of the transaction.  | `hash`: `0x9cbf434f...`                |
| `operations`             | Array      | List of operations within the transaction. | Array of operation objects.          |
| `metadata`               | Object     | Metadata for the transaction.        | Transaction metadata details including description, execution cost, fee, etc. |

#### Operations Level (within `operations`)

| Key                    | Value Type | Description                     | Data                                   |
|------------------------|------------|---------------------------------|----------------------------------------|
| `operation_identifier` | Object     | Contains `index` of the operation. | `index`: 0 for first, 1 for second operation |
| `related_operations`   | Array      | List of related operation indices. | `[ { "index": 1 } ]` for first, `[ { "index": 0 } ]` for second operation |
| `type`                 | String     | Type of the operation.           | `DEBIT` for first, `CREDIT` for second operation |
| `status`               | String     | Status of the operation.         | `SUCCESS`                              |
| `account`              | Object     | Contains the `address` of the account involved. | `address`: Varies per operation |
| `amount`               | Object     | Contains `value`, `currency`.    | `value`: 100, `currency`: `STX` details for both operations |

#### `chainhook` Object Structure

| Key          | Value Type | Description                                 | Data                                   |
|--------------|------------|---------------------------------------------|----------------------------------------|
| `uuid`       | String     | Unique identifier for the chainhook.        | `1`                                    |
| `predicate`  | Object     | Conditions for the chainhook trigger.       | Predicate details.                     |
| `is_streaming_blocks` | Boolean | Indicates if blocks are being streamed. | `false`                                |

#### Predicate Level (within `chainhook`)

| Key                   | Value Type | Description                             | Data                                   |
|-----------------------|------------|-----------------------------------------|----------------------------------------|
| `scope`               | String     | Scope of the trigger.                   | `contract_call`                        |
| `contract_identifier` | String     | Identifier of the contract involved.    | `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.test-functions-v2` |
| `method`              | String     | Contract method for the trigger.        | `send-stx-memo`                        |
