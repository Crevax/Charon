<?php

namespace Crevax\PortfolioBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PortfolioController extends Controller
{
    public function indexAction()
    {
        // TODO: Cache Results
        $token = $this->container->getParameter('github_token');
        $client = new \Github\Client();
        $client->authenticate($token, null, \Github\Client::AUTH_URL_TOKEN);
        $repositories = $client->api('current_user')->repositories();

        return $this->render('CrevaxPortfolioBundle:Portfolio:index.html.twig', array(
          'repositories' => $repositories
        ));
    }
}
