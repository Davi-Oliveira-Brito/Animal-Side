drop database if exists sistemaanimalside;
create database if not exists sistemaanimalside;
use sistemaanimalside;


create table tb_usuario(
	ID_USUARIO					int primary key auto_increment,
    NM_USUARIO					varchar(100),
	DT_NASCIMENTO				date,
	DS_TELEFONE					varchar(100),
	DS_ENDERECO					varchar(100),
	VL_RENDA					decimal(10,5),
	QTD_PESSOAS_CASA			int,
	BT_ANIMAIS_CASA				boolean,
	TM_TEMPO_SOZINHO_ANIMAL		time(6),
	DS_EMAIL					varchar(100),
	DS_SENHA					varchar(100),
	IMG_USUARIO					varchar(100)
);

create table tb_admin(
	id_admin		int primary key auto_increment,
	nm_admin 		varchar(100),
	ds_email		varchar(100),
	ds_senha		varchar(100)
);

create table tb_tipo(
	id_tipo		int primary key auto_increment,
    nm_tipo		varchar(100)	
);

create table tb_porte (
	id_porte 		int primary key auto_increment,
	ds_porte		varchar(300)
); 

create table tb_raca(
	id_raca		int primary key auto_increment,
	ds_raca		varchar(300)
);

create table tb_preferencia(
	id_preferencia		int primary key auto_increment,
	ds_preferencia		varchar(100)
);

create table tb_sexo(
id_sexo 		int primary key auto_increment,
ds_sexo			varchar(100)
);

create table tb_animal_perdido(
	id_animal				int primary key auto_increment,
	nm_animal				varchar(100),
	nr_idade				int,
	ds_telefone_contato		varchar(100),
	dt_dia_sumico			date,
	ds_descricao			varchar(100),
	bt_status				boolean,
	img_animal				varchar(100),
	id_usuario				int,
	id_porte				int,
	id_raca					int,
    id_sexo					int,
    id_tipo					int,
	foreign key (id_usuario) references tb_usuario(ID_USUARIO),
	foreign key (id_porte) references tb_porte(id_porte),
	foreign key (id_raca) references tb_raca(id_raca),
    foreign key (id_sexo) references tb_sexo(id_sexo),
    foreign key (id_tipo) references tb_tipo(id_tipo)
);
create table tb_comentario_adocao(
	id_comentario_adocao 	int primary key auto_increment,
	ds_descricao		varchar(100),
	ds_feedback 		varchar(100),
	id_usuario			int,
	foreign key (id_usuario) references tb_usuario(ID_USUARIO)
);
create table tb_animal_adocao(
	id_animal_adocao		int primary key auto_increment,
	nm_animal				varchar(100),
	nr_idade				int,
	ds_sexo					varchar(100),
	ds_descricao			varchar(100),
	img_animal				varchar(100),
	id_usuario				int,
	id_porte				int,
	id_raca					int,
	id_comentario_adocao 	int,
	id_preferencia			int,
    id_sexo 				int,
    id_tipo					int,
	foreign key (id_comentario_adocao) references tb_comentario_adocao(id_comentario_adocao),
	foreign key (id_usuario) references tb_usuario(ID_USUARIO),
	foreign key (id_porte) references tb_porte(id_porte),
	foreign key (id_raca) references tb_raca(id_raca),
	foreign key (id_preferencia) references tb_preferencia(id_preferencia),
    foreign key (id_sexo) references tb_sexo(id_sexo),
    foreign key (id_tipo) references tb_tipo(id_tipo)
);

create table tb_doacao(
	id_doacao		int primary key auto_increment,
	ds_cnpj			varchar(100),
	ds_chave_aleatoria	varchar(100),
	ds_telefone			varchar(100),
	ds_email			varchar(100),
	id_usuario			int,
	foreign key (id_usuario) references tb_usuario(ID_USUARIO)
);

create table tb_denuncia(
	id_denuncia		int primary key auto_increment,
	qtd_denuncia	int,
	id_usuario		int,
	id_animal_perdido	int,
	foreign key (id_usuario) references tb_usuario(ID_USUARIO),
	foreign key (id_animal_perdido) references tb_animal_perdido(id_animal)
);

create table tb_comentario(
	id_comentario		int primary key auto_increment,
	nm_usuario			varchar(100),
	ds_comentario		varchar(100),
	nr_curtida			int,
	id_usuario			int,
	foreign key (id_usuario) references tb_usuario(ID_USUARIO)
);

create table tb_animal_cometario(
	id_animal_comentario 	int primary key auto_increment,
	id_comentario			int,
	id_animal_perdido		int,
	foreign key (id_animal_perdido) references tb_animal_perdido(id_animal),
	foreign key (id_comentario) references tb_comentario(id_comentario)
);



create table tb_calendario(
	id_calendario		int primary key auto_increment,
	nr_dia_mes_ano		date,
	ds_endereco			varchar(100),
	dt_horario 			date,
	ds_telefone			varchar(100),
	id_admin			int,
	foreign key (id_admin) references tb_admin(id_admin)
);