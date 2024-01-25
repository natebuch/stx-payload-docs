## stx-payload-docs

| Print Contract Function | STX Transfer Contract Function | [FT Mint Contract Function](#FT-Mint-Contract-Function) | NFT Mint Contract Function |
|---|---|---|---|

#### FT Mint Contract Function
```
(define-public (mint-ft (amount uint) (recipient principal))
  (ft-mint? doc-ft amount recipient)
)
```
#### JSON Object Documentation

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

