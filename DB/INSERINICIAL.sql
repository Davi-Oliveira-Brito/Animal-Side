use sistemaanimalside;
-- isert inicial do adm
-- Insert Inicial Usuário;
insert into tb_usuario(NM_USUARIO, DT_NASCIMENTO, DS_TELEFONE, DS_ENDERECO, VL_RENDA, QTD_PESSOAS_CASA, BT_ANIMAIS_CASA, TM_TEMPO_SOZINHO_ANIMAL, DS_EMAIL, DS_SENHA, TP_RESIDENCIA)
				values("Biro Biro", '2003-01-23', 119881216, 'rua dos passaros, novo jaú', 1500, 6, 2, '06:00', 'teste@teste.com', '123456', 'casa');
			
insert into tb_admin(nm_admin, ds_email, ds_senha)
			  values('Administrador','admin@admin','admin');
              
insert into tb_raca(ds_raca)
				values('Salsicha');
                
insert into tb_preferencia(ds_preferencia)
				   values('Apartamento');
                   
insert into tb_porte(ds_porte)
			  values('G');
              
insert into tb_tipo(nm_tipo)
			 values('Porquinho Da ìndia');

insert into tb_sexo(ds_sexo)
			 values('Femea');

-- insert da tabela adocao
insert into tb_animal_adocao(nm_animal,nr_idade,ds_descricao,img_animal,id_admin, id_porte,id_raca, id_preferencia,id_sexo)
					  values('dogui',11,'cachor',null, 1, 1, 1, 1, 1);
                      

insert into tb_animal_perdido(nm_animal, nr_idade, ds_telefone_contato, dt_dia_sumico, ds_descricao, bt_status, id_usuario, id_porte, id_raca, id_sexo)
						values('Dog dahora', 15, '119881216', '2022-11-22', 'texto bem dahora aqui', 0, 1, 1, 1, 1);


insert into tb_motivo_adocao(ds_comentario, id_usuario, id_animal_adocao)
					  values('Achei ele super fofo e queria adotar ele!', 1, 1);


insert into tb_comentario(ds_comentario, id_usuario, id_animal_perdido)
				   values('Vi um gato parecido aqui na rua', 1, 1);



insert into tb_feedback(ds_feedback, id_usuario, id_animal_adocao)
				 values('Comentario', 1, 1);

-- inserir comentario aniaml_perdido
insert into tb_animal_comentario(id_comentario, id_animal_perdido)
						 values(1, 1);
