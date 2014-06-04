<?php
// src/Crevax/LibraryBundle/Form/Type/AuthorType.php

namespace Crevax\LibraryBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class AuthorType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
      ->add('firstName')
      ->add('lastName')
      ->add('save', 'submit');
  }

  public function getName()
  {
    return 'author';
  }
}