import React, {useCallback} from 'react'
import {useForm} from "react-hook-form"
import Button from "../Button"
import Input from "../Input"
import RTE from "../RTE"
import Select from "../Select"
import appwriteService from "../../appwrite/config"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default ({post}) => {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
    }
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  const submit = async(data) => {}

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
        return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace()
    }
  })

}