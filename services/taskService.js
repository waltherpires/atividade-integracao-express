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

exports.createTask = async (req, res) => {
    try {
      const taskData = req.body; 
      const { data } = await cliente.supabase
        .from('tasks')
        .insert([taskData])
        .select()
        .single();

      res.send(data);
    } catch (error) {
      console.error(error);
    }
  };
  