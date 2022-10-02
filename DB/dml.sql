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
select 	ds_raca
from 	tb_raca;

-- select do porte
select 	ds_porte
from	tb_porte;

-- select da preferencia
select 	ds_preferencia
from	tb_preferencia;

-- select do tipo
select nm_tipo
from tb_tipo;

-- select do sexo
select  ds_sexo
from	tb_sexo;

-- insert da tabela adocao
insert into tb_animal_adocao(nm_animal,nr_idade,ds_descricao,img_animal,id_usuario, id_porte,id_raca, id_comentario_adocao, id_preferencia,id_sexo,id_tipo)
					  values('doguinho',11,'cachorrooooo','', null, 1,1,null,1,1,1 );			
              
			
-- select das dog adoção
select * from tb_animal_adocao;

-- select da barra de pesquisa
select * from tb_animal_adocao
where nm_animal like 'Cachorro%';

-- filtros
select * from tb_animal_adocao
where id_tipo = 1 ;

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
        
        







              