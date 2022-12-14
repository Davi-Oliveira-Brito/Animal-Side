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
					  values('dogui',11,'cachor',null, 1, 1, 1, 1, 1);			
              
-- Insert animal perdido
insert into tb_animal_perdido(nm_animal, nr_idade, ds_telefone_contato, dt_dia_sumico, ds_descricao, bt_status, id_usuario, id_porte, id_raca, id_sexo)
						values('Dog dahora', 15, '119881216', '2022-11-22', 'texto bem dahora aqui', 0, 1, 1, 1, 1);


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
insert into tb_usuario(NM_USUARIO, DT_NASCIMENTO, DS_TELEFONE, DS_ENDERECO, VL_RENDA, QTD_PESSOAS_CASA, BT_ANIMAIS_CASA, TM_TEMPO_SOZINHO_ANIMAL, DS_EMAIL, DS_SENHA, TP_RESIDENCIA)
				values("Biro Biro", '2003-01-23', 119881216, 'rua dos passaros, novo jaú', 1500, 6, 2, '06:00', 'teste@teste.com', '123456', 'casa');
			
-- Inser inicial comentario
insert into tb_comentario(ds_comentario, id_usuario)
				   values('Vi um cachorro assim no parque aqui perto de casa na rua piriripororor no dia 18/10/2022', 1);


insert into tb_animal_perdido(nm_animal, nr_idade, ds_telefone_contato, dt_dia_sumico, ds_descricao, bt_status, id_usuario, id_porte, id_raca, id_sexo)
						values('Dog dahora', 15, '119881216', '2022-11-22', 'texto bem dahora aqui', 0, 1, 1, 1, 1);

insert into tb_motivo_adocao(ds_comentario, id_usuario, id_animal_adocao)
					  values('Achei ele super fofo e queria adotar ele!', 1, 3);


insert into tb_comentario(ds_comentario, id_usuario, id_animal_perdido)
				   values('Vi um gato parecido aqui na rua', 1, 3);



insert into tb_feedback(ds_feedback, id_usuario, id_animal_adocao)
				 values('Comentario', 1, 1);

-- Buscando informaçoes do usuario
select * from tb_usuario where id_usuario = ?; 

update 	tb_usuario
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
where 	ID_USUARIO = ?;


-- Buscar Aniamis perdido
select  tb_animal_perdido.nm_animal				as nome,
		tb_animal_perdido.nr_idade			    as idade,
		tb_animal_perdido.ds_telefone_contato   as telefone,
		tb_animal_perdido.dt_dia_sumico		    as diaSumico,
		tb_animal_perdido.ds_descricao		    as descricao,
		tb_animal_perdido.bt_status			    as status,
		tb_animal_perdido.img_animal			as imagem,
		
		tb_porte.ds_porte					    as porte,
		tb_porte.id_porte,                
		
		tb_raca.ds_raca						    as raca,
		tb_raca.id_raca,
		
		tb_sexo.ds_sexo						    as sexo,
		tb_sexo.id_sexo

from 	tb_animal_perdido
inner join tb_porte on tb_animal_perdido.id_porte = tb_porte.id_porte
inner join tb_raca on tb_animal_perdido.id_raca = tb_raca.id_raca
inner join tb_sexo on tb_animal_perdido.id_sexo = tb_sexo.id_sexo;

-- inserir comentario aniaml_perdido
insert into tb_animal_cometario(id_comentario, id_animal_perdido)
						 values(1, 1);



select  id_comentario,
		ds_comentario,
		tb_comentario.id_usuario,
		id_animal_perdido
from	tb_comentario
inner join tb_animal_perdido on tb_comentario.id_animal_perdido = tb_animal_perdido.id_animal;


select 	id_motivo_adocao,
		tb_usuario.id_usuario,
		
		tb_motivo_adocao.ds_comentario,
		tb_motivo_adocao.id_animal_adocao,

		tb_usuario.nm_usuario,
		tb_usuario.ds_telefone,
		tb_usuario.ds_email,
		tb_usuario.vl_renda,
		tb_usuario.bt_animais_casa,
		tb_usuario.tp_residencia

from 		tb_motivo_adocao
inner join 	tb_usuario on tb_motivo_adocao.id_usuario = tb_usuario.id_usuario;

-- Meus Interesses
select 	id_motivo_adocao,
		tb_usuario.id_usuario,
        tb_animal_adocao.id_animal_adocao,
        
        tb_animal_adocao.ds_descricao			 as descricao,
        tb_animal_adocao.nm_animal				 as nome,
        tb_animal_adocao.nr_idade			as idade,
		tb_animal_adocao.img_animal			as imagem,
        
        tb_preferencia.ds_preferencia		as preferencia,
		tb_preferencia.id_preferencia,
        
		tb_porte.ds_porte					    as porte,
		tb_porte.id_porte,                
		
		tb_raca.ds_raca						    as raca,
		tb_raca.id_raca,
		
		tb_sexo.ds_sexo						    as sexo,
		tb_sexo.id_sexo
        
        
from 	tb_motivo_adocao
inner join 	tb_usuario on tb_motivo_adocao.id_usuario = tb_usuario.id_usuario
inner join 	tb_animal_adocao on tb_motivo_adocao.id_animal_adocao = tb_animal_adocao.id_animal_adocao 
inner join tb_porte on tb_animal_adocao.id_porte = tb_porte.id_porte
inner join tb_raca on tb_animal_adocao.id_raca = tb_raca.id_raca
inner join tb_sexo on tb_animal_adocao.id_sexo = tb_sexo.id_sexo
inner join tb_preferencia on tb_animal_adocao.id_preferencia = tb_preferencia.id_preferencia

where tb_motivo_adocao.id_usuario = 1;



