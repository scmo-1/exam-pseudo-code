// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock



/*
START 
SET variabel summa = INPUT 
SET variabel antalVänner = INPUT 
SET variabel dricks = INPUT 
SET variabel slutSumma = CALCULATE (summa + (summa * dricks)) / antalVänner
PRINT = varje person ska betala 'slutSumma'
END
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om

/*
START 
SET ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE] 
SET startOrd = FOUR
SET slutOrd = FIVE
CALL spela

FUNCTION spela()
    WHILE startOrd !== slutOrd
        SET nyttOrd = INPUT 'Ange ord:'
        SET ordbokMatch = jämförOrd (startOrd, nyttOrd, ordbok)
        IF ordbokMatch == TRUE 
            startOrd = nyttOrd
        ELSE
            PRINT Ordet existerar inte i ordboken
        END IF           
    END WHILE 
    IF startOrd == slutOrd 
        PRINT Pussel löst!
        PRINT Spelet avslutat  
    END IF                   
END FUNCTION  

FUNCTION jämförOrd (startOrd, nyttOrd, ordbok)
    SET diffCount = 0
    LOOP index(i) från 0 till length(startOrd) - 1
        IF nyttOrd(i) !== startOrd(i) 
            SET diffCount = diffCount + 1
        END IF
    END LOOP 
    
    IF diffCount == 0
        PRINT Inget bokstavsbyte har gjorts
        RETURN FALSE 
    ELSE IF diffCount > 1
        PRINT Endast 1 bokstav får bytas ut
        RETURN FALSE
    END IF
    IF diffCount == 1
        SET ordbokMatch = FALSE
        LOOP varje element i ordbok
            IF nyttOrd == element
                SET ordbokMatch = TRUE
            END IF
        END LOOP
    END IF
    RETURN ordbokMatch
END FUNCTION    

END
*/