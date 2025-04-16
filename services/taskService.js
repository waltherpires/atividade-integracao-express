const cliente = require('../config/db');

exports.getAllTasks = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tasks').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.getTask = async (req, res) => {
    try {
        const { id } = req.params;
        let { data } = await cliente.supabase.from('tasks').select('*').eq('id', id);
        res.send(data);
    } catch (error) {
        console.error(error);
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        let { data } = await cliente.supabase.from('tasks').delete('*').eq('id', id);
        res.send(data);
    }catch (error) {
        console.error(error);
    }
}

exports.createTask = async (taskData) => {
    const { data, error } = await cliente.supabase
      .from('tasks')
      .insert([taskData])
      .select()
      .single();
  
    if (error) throw error;
  
    return data;
};