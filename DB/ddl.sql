select 	id_motivo_adocao,
    tb_usuario.id_usuario,
    
    tb_motivo_adocao.ds_comentario,
    tb_motivo_adocao.id_animal_adocao,

    tb_usuario.nm_usuario,
    tb_usuario.ds_telefone,
    tb_usuario.ds_email,
    tb_usuario.vl_renda,
    tb_usuario.bt_animais_casa,
    tb_usuario.tp_residencia,

    tb_feedback.ds_feedback

    from 		tb_motivo_adocao
    inner join 	tb_usuario on tb_motivo_adocao.id_usuario = tb_usuario.id_usuario
    left join  tb_feedback on tb_motivo_adocao.id_usuario = tb_feedback.id_usuario;