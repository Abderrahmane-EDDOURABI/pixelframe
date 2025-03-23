import React, { useState } from 'react'
import "./auth-form.css";
import { Link } from "react-router-dom";
import { Upload, User, Mail, Lock } from "lucide-react";

const AuthForm = ({isRegister}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: null,
        role: "client",
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Ajouter la logique d'envoi au backend ici
      };
    
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{isRegister ? "Créer un compte" : "Se connecter"}</h1>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <User className="icon" />
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <Mail className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <Lock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {isRegister && (
            <>
              <div className="input-group file-input">
                <Upload className="icon" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <select name="role" value={formData.role} onChange={handleChange}>
                  <option value="client">Client</option>
                  <option value="photographe">Photographe</option>
                </select>
              </div>
            </>
          )}
          <button type="submit" className="btn-primary">
            {isRegister ? "S'inscrire" : "Se connecter"}
          </button>
        </form>
        <p>
          {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
          <Link to={isRegister ? "/login" : "/register"}>
            {isRegister ? "Se connecter" : "Créer un compte"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm