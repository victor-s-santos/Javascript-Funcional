DROP TABLE IF EXISTS TB_HEROIS;
CREATE TABLE TB_HEROIS(
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
)
--verbo create
INSERT INTO TB_HEROIS (NOME, PODER)
VALUES
    ('Goku', 'Humildade'),
    ('Vegeta', 'Orgulho'),
    ('Mr Satã', 'Imbecilidade')

--verbo read
SELECT * FROM TB_HEROIS;
SELECT * FROM TB_HEROIS WHERE NOME= 'Vegeta';
SELECT NOME FROM TB_HEROIS WHERE PODER= 'Orgulho';
--assim deve retornar Vegeta

--verbo update
UPDATE TB_HEROIS
SET NOME= 'Freeza', PODER= 'Pura crueldade'
WHERE ID = 1;