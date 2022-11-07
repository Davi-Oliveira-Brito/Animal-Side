use sistemaanimalside;

-- isert inicial do adm
insert into tb_admin(nm_admin, ds_email, ds_senha)
			  values('Administrador','admin@admin','admin');
              
insert into tb_raca(ds_raca)
				values('Salsicha');
                
                
select * from tb_animal_adocao; 
                
insert into tb_preferencia(ds_preferencia)
				   values('Apartamento');
                   
insert into tb_porte(ds_porte)
			  values('G');
              
insert into tb_tipo(nm_tipo)
			 values('Porquinho Da ìndia');

insert into tb_sexo(ds_sexo)
			 values('Femea');

-- select da login-page
select id_admin,
	   ds_email,
	   ds_senha
from   tb_admin
where  ds_email = 'admin@admin' and ds_senha = '1234';

-- CADASTRO PAGE

-- select do nome do admin
select 	nm_admin
from 	tb_admin
where	id_admin = 1;

-- select da raça
select 	*
from 	tb_raca;

-- select do porte
select 	*
from	tb_porte;

-- select da preferencia
select 	*
from	tb_preferencia;

-- select do tipo
select *
from tb_tipo;

-- select do sexo
select  *
from	tb_sexo;

-- insert da tabela adocao
insert into tb_animal_adocao(nm_animal,nr_idade,ds_descricao,img_animal,id_admin, id_porte,id_raca, id_preferencia,id_sexo)
					  values('doguinho',11,'cachorrooooo','', 1, 1, 1, 1, 1);			
              
			
-- select das dog adoção
select * from tb_animal_adocao;

-- select da barra de pesquisa
select * from tb_animal_adocao
where nm_animal like 'Cachorro%';

-- filtros

select * from tb_animal_adocao
where id_sexo = 2;

select * from tb_animal_adocao
where id_sexo = 1;

select * from tb_animal_adocao
where id_porte = 2;

select * from tb_animal_adocao
where id_porte = 3;


select * from tb_animal_adocao
where nr_idade <=5;

select * from tb_animal_adocao
where nr_idade <=10;

select * from tb_animal_adocao
where nr_idade >10;

-- select do card 
select 	img_animal,
		nm_animal,
        id_raca,
        ds_descricao,
        nr_idade
from 	tb_animal_adocao;

select nm_animal,
		nr_idade,
		id_porte,
        id_raca,
        id_preferencia
 from tb_animal_adocao;
 
 delete from tb_animal_adocao
 where id_animal_adocao= 1;
 
 update tb_animal_adocao
 set nm_animal ='cachorro caramelo',
	nr_idade  = 11,
    ds_descricao ='perigoso',
    id_admin  = 1,
    id_porte	= 1,
    id_raca		= 1,
    id_preferencia =1,
    id_sexo			=1
where id_animal_adocao = 1;
        
        
-- Insert Inicial Usuário;
insert into tb_usuario(NM_USUARIO, DT_NASCIMENTO, DS_TELEFONE, DS_ENDERECO, VL_RENDA, QTD_PESSOAS_CASA, BT_ANIMAIS_CASA, TM_TEMPO_SOZINHO_ANIMAL, DS_EMAIL, DS_SENHA, IMG_USUARIO)
				values("Biro Biro", '2003-01-23', 119881216, 'rua dos passaros, novo jaú', 1500, 6, 2, '06:00', 'teste@teste.com', '123456', null);
			




-- Buscando informaçoes do usuario
select * from tb_usuario where id_usuario = ? 

update 	tb_usuario,
set 	NM_USUARIO = ?,
		DT_NASCIMENTO = ?,
		DS_TELEFONE = ?,
		DS_ENDERECO = ?,
		VL_RENDA = ?,
		QTD_PESSOAS_CASA = ?,
		BT_ANIMAIS_CASA = ?,
		TM_TEMPO_SOZINHO_ANIMAL = ?,
		DS_EMAIL = ?,
		DS_SENHA = ?,
		TP_RESIDENCIA = ?
where 	ID_USUARIO = ?