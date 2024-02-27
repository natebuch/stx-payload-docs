
;; title: test-functions-v4
;; version:
;; summary:
;; description:

;; traits
;;

;; token definitions
(define-non-fungible-token doc-nft uint)
(define-fungible-token doc-ft u1000)

;; constants


;; data vars
;;

;; data maps
;;

;; public functions
(define-public (hello-world)
  (begin 
    (print "Hello World")
    (ok true)
  )
)

(define-public (hello-memo (memo (buff 34)))
  (begin 
    (print memo)
    (ok true)
  )
)

(define-public (mint-ft (amount uint) (recipient principal))
  (ft-mint? doc-ft amount recipient)
)

(define-public (mint-nft (id uint) (recipient principal))
  (nft-mint? doc-nft id recipient)
)

(define-public (send-stx (amount uint) (sender principal) (recipient principal))
  (stx-transfer? amount sender recipient)
)

(define-public (send-stx-memo (amount uint) (sender principal) (recipient principal) (memo (buff 34)))
  (stx-transfer-memo? amount sender recipient memo)
)

(define-public (send-stx-embedded-memo)
  (stx-transfer-memo? u100 tx-sender 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5 (unwrap-panic (to-consensus-buff? "Here lies memo")))
)

(define-public 
  (send-stx-many-recipients 
    (amount uint)
    (recipient-one principal)
    (recipient-two principal)
    (recipient-three principal)
  )
  (begin 
    (try!  (stx-transfer? amount tx-sender recipient-one))
    (try!  (stx-transfer? amount tx-sender recipient-two))
    (try!  (stx-transfer? amount tx-sender recipient-three))
    (ok true)
  )
)
;; read only functions
;;

;; private functions
;;

