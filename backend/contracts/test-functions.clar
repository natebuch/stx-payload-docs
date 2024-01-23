
;; title: test-functions
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
(define-public (hello)
  (begin 
    (print "Hello World!")
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

;; read only functions
;;

;; private functions
;;

