<?php
// src/Crevax/LibraryBundle/Form/Type/BookType.php

namespace Crevax\LibraryBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class BookType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
      ->add('title')
      ->add('author')
      ->add('save', 'submit');
  }

  public function getName()
  {
    return 'book';
  }
}