<?php

namespace Crevax\LibraryBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class LibraryController extends Controller
{
    public function indexAction()
    {
        return $this->render('CrevaxLibraryBundle:Library:index.html.twig');
    }
}
