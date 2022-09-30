use sistemaanimalside;

-- isert inicial do adm
insert into tb_admin(nm_admin, ds_email, ds_senha)
			  values('Administrador','admin@admin','admin');
              
insert into tb_raca(ds_raca)
				values('Vira-Late');
                
                
select * from tb_animal_adocao; 
                
insert into tb_preferencia(ds_preferencia)
				   values('Apartamento');
                   
insert into tb_porte(ds_porte)
			  values('G');

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

-- insert da tabela adocao
insert into tb_animal_adocao(nm_animal,nr_idade,ds_sexo,ds_descricao,img_animal,id_usuario,id_porte,id_raca,id_comentario_adocao,id_preferencia)
			  values('Apolo',12,'Macho','aaaa','',1,1,1,1,1);
              
              
			
-- select das dog adoção
select * from tb_animal_adocao;

-- select da barra de pesquisa
select * from tb_animal_adocao
where nm_animal like 'Cachorro%';

-- filtros
select * from tb_animal_adocao
where id_raca = 1;

select * from tb_animal_adocao
where ds_sexo = 'Macho';

select * from tb_animal_adocao
where ds_sexo = 'Femea';

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







              