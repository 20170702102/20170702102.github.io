��v a r   a _ i d x   =   0 ;  
 j Q u e r y ( d o c u m e n t ) . r e a d y ( f u n c t i o n ( $ )   {  
         $ ( " b o d y " ) . c l i c k ( f u n c t i o n ( e )   {  
                 v a r   a   =   n e w   A r r a y  
                 ( " OeOe" ) ;  
                 v a r   $ i   =   $ ( " < s p a n / > " ) . t e x t ( a [ a _ i d x ] ) ;  
                 a _ i d x   =   ( a _ i d x   +   1 )   %   a . l e n g t h ;  
                 v a r   x   =   e . p a g e X ,  
                 y   =   e . p a g e Y ;  
                 $ i . c s s ( {  
                         " z - i n d e x " :   5 ,  
                         " t o p " :   y   -   2 0 ,  
                         " l e f t " :   x ,  
                         " p o s i t i o n " :   " a b s o l u t e " ,  
                         " f o n t - w e i g h t " :   " b o l d " ,  
                         " c o l o r " :   " # F F 0 0 0 0 "  
                 } ) ;  
                 $ ( " b o d y " ) . a p p e n d ( $ i ) ;  
                 $ i . a n i m a t e ( {  
                         " t o p " :   y   -   1 8 0 ,  
                         " o p a c i t y " :   0  
                 } ,  
 	 	 	 3 0 0 0 ,  
 	 	 	 f u n c t i o n ( )   {  
 	 	 	         $ i . r e m o v e ( ) ;  
 	 	 	 } ) ;  
         } ) ;  
         s e t T i m e o u t ( ' d e l a y ( ) ' ,   2 0 0 0 ) ;  
 } ) ;  
  
 f u n c t i o n   d e l a y ( )   {  
         $ ( " . b u r y i t " ) . r e m o v e A t t r ( " o n c l i c k " ) ;  
 }  
 